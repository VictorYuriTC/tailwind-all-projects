import React, { useContext, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import SongsContext from '../../context/SongsContext';

function SongOptionsBar() {
  const contextValue = useContext(SongsContext);
  const { playingSong: { currentSong, setCurrentSong }} = contextValue;
  useEffect(() => {
    return () => {
      setCurrentSong({ 
        artistName: 'Artist',
        trackName: 'Track',
        previewUrl: '',
      })
    }
  }, [])

  return (
    <footer className="bg-black flex flex-row w-full h-20
      fixed inset-x-0 bottom-0 border-t border-opacity-10 border-[#fafafa]
      justify-around items-center
    text-white"
    >
      <div className="flex flex-col items-start">
        <span className="font-medium text-lg">
          { currentSong.trackName }
        </span>
        <span className="font-medium text-sm">
          { currentSong.artistName }
        </span>
      </div>
      <span>
        <ReactAudioPlayer
          src={ currentSong.previewUrl }
          controls
          className=""
          autoPlay
        /> 
      </span>
    </footer>
  );
}
export default SongOptionsBar;