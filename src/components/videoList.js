import React from 'react';

import VideoListItem from './videoListItem';

//props are passed from index.js when VideoList was rendered
const VideoList=(props)=>{
    const videos = props.videos;
    const onVideoSelect = props.onVideoSelect;
    
    const videoItems=videos.map((video)=>{
                            return <VideoListItem 
                                        key={video.etag}
                                        video={video} 
                                        onVideoSelect={onVideoSelect}/>
                            });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
        );
}

export default VideoList;