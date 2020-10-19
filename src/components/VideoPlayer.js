import React from 'react';

export default function VideoPlayer({ videoFile }) {
  console.log(videoFile === '../images/Demo.mov');
  const baseUrl = '../images/Demo.mov';
  return (
    <video loop autoPlay muted width="500">
      <source src={require('../images/Demo3.mov')} type="video/mp4"></source>
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}
