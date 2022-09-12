import React, { useContext, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import SongsContext from '../../context/SongsContext';

function SongOptionsBar() {
  const contextValue = useContext(SongsContext);
  const { playingSong: { currentSong, setCurrentSong }} = contextValue;
  useEffect(() => {
    return () => {
      setCurrentSong('')
    }
  }, [])

  return (
    <footer className="bg-his-purple flex flex-row w-full h-20
      fixed inset-x-0 bottom-0
      justify-around items-center
    text-white font-bold text-2xl"
    >
      <div className="flex flex-col">
        <span>
          { currentSong.trackName }
        </span>
        <span>
          { currentSong.artistName }
        </span>
      </div>
      <span>
        { currentSong
        && <ReactAudioPlayer
            src={ currentSong.previewUrl }
            controls
            className=""
            autoPlay
          /> 
        }
      </span>
    </footer>
  );
}
export default SongOptionsBar;