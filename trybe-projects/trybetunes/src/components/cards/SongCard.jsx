import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import Header from '../menus/Header';

function SongCard({ song, index }) {
  const {
    previewUrl,
    trackName,
  } = song
  return (
    <>
      <div className="flex items-center">
        <span className="basis-8">
          { index }
        </span>
        <h1>
          { trackName }
        </h1>
        <ReactAudioPlayer
          src={ previewUrl }
          controls
          className=""
        />
      </div>
    </>
  );
}
export default SongCard;