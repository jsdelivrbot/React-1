import React, {Component} from 'react';

//A class based component is used here as we need to capture the data entered in the search box
class SearchBar extends Component{
    constructor(props){
        //super(props) calls the constructor of the extended class Component.
        super(props);

        this.state = {searchTerm :''};
    }

    //A class based component must have a render method
    //Whenever Java Script variables are used inside JSX they must be wrapped in {} 
    render(){
        return (
        <div className="search-bar">
            <input 
                value={this.state.searchTerm}
                onChange={(event) => {this.onInputChange(event.target.value)}}/>
        </div>
        );
    }

    //event handler to capture the text entered in input
    onInputChange(term){
       //console.log('Search Term', term);
       this.setState({searchTerm:term});
       this.props.onSearch(term);
    }
}

//export default is used to export the component(SearchBar) defaultly whenever this file is imported.
export default SearchBar;