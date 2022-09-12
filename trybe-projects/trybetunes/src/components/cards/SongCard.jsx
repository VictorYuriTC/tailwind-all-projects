import React, { useContext, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import SongsContext from '../../context/SongsContext';
import Header from '../menus/Header';
import PlaySVG from '../svgs/PlaySVG';

function SongCard({ song, index }) {
  const contextValue = useContext(SongsContext)
  const { playingSong: { setCurrentSong }} = contextValue

  const {
    currency,
    previewUrl,
    trackPrice,
    trackName,
  } = song

  const onClickChangeCurrentSong = () => setCurrentSong(song)

  return (
    <>
      <div className="group opacity-80 font-semibold flex flex-row items-center gap-5 justify-between w-full
        hover:bg-[#444444] hover:opacity-100 p-8 rounded">
        <div className="hover:cursor-pointer">
          <span className="group-hover:hidden basis-4 font-black left-0 text-center">
            { index }
          </span>
          <PlaySVG 
            className="hidden group-hover:inline-block fill-white"
            onClick={ onClickChangeCurrentSong }
          />
        </div>
        <h1 className="">
          { trackName }
        </h1>
        <h1 className="">
          ${ trackPrice } { currency }
        </h1>
      </div>
    </>
  );
}
export default SongCard;