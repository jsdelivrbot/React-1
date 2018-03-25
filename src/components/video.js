import React from 'react';

const Video =(props)=>{
    const video = props.video;

    if(!video)
    {
        return(
            <div>Loading...</div>
        );
    }

    const videoId = video.id.videoId;
    const videoURL = 'http://www.youtube.com/embed/'+videoId;

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoURL}></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default Video;