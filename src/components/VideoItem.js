import React from 'react';
import './videoItem.scss';

const VideoItem = ({video, onVideoSelect}) => {

  return (
    <div id='override-semantic' className='video-item item'>
      <img
        alt={ video.snippet.title }
        className='ui image video-item__image'
        src={ video.snippet.thumbnails.medium.url }
      />
      <div
        onClick={ () => onVideoSelect(video) }
        className='content'
      >
        <div className='header video-item__description'>
          { video.snippet.title }
        </div>
      </div>
    </div>
  )
};

export default VideoItem;
