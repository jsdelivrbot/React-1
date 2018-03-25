import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import Video from './components/video';
import VideoList from './components/videoList';
import video from './components/video';

const API_KEY= 'AIzaSyB_dzjPZ2nRVb1vVf23yN2neLQIkMw2NLA';

//Create a new component
class App extends Component{
    constructor(props){
        super(props);
        this.state = {videos:[], 
                    selectedVideo:null,
                    searchTerm: 'puppies'};

        this.videoSearch(this.state.searchTerm);
    }

    videoSearch=(searchTerm) =>{
        YTSearch({key:API_KEY, term: searchTerm}, (data)=>{
            this.setState({videos:data});
            this.setState({selectedVideo:data[0]});
        });   
    } 

    render(){
        //debounce is used to throttle user input
        //Here we are waiting for 300 milli seconds to execute videoSearch function
        const dbVideoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);

        return(<div>
            <SearchBar onSearch={dbVideoSearch}/>
            <Video video={this.state.selectedVideo} />
            <VideoList 
                videos={this.state.videos}
                //onVideoSelect is a callback function to update the selectedVideo
                onVideoSelect={(clickedVideo) => {this.setState({selectedVideo:clickedVideo})}} />
        </div>);
    }
};

//Render the component and put it on html page
//<App /> is an instance of the class App we created above
//We pass an instance of the class to ReactDOM.render method
ReactDOM.render(<App />, document.getElementsByClassName('container')[0]);