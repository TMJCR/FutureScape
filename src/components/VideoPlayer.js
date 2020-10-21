import React from 'react';

export default function VideoPlayer({ videoFile }) {
  const baseUrl = require(`../images/${videoFile}`);
  return (
    <video key={videoFile} playsInline webkit-playsinline="true" loop autoPlay muted width="500">
      <source src={baseUrl} type="video/mp4"></source>
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}
