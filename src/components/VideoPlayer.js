import React from 'react';

export default function VideoPlayer({ videoFile }) {
  const baseUrl = require(`../images/${videoFile}.mp4`);
  return (
    <video key={videoFile} playsInline webkit-playsinline="true" loop autoPlay muted width="600">
      <source src={baseUrl} type="video/mp4"></source>
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}
