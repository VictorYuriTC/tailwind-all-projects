import React, { useContext } from 'react'
import SongsContext from '../../context/SongsContext';
import PlaySVG from '../svgs/PlaySVG';

function SongCard({ song, index }) {
  const contextValue = useContext(SongsContext)
  const {
    playingSong: { setCurrentSong },
    listened: { recentlyListenedSongs, setRecentlyListenedSongs }
  } = contextValue

  const {
    artistName,
    currency,
    trackPrice,
    trackName,
    trackId,
    artworkUrl60,
    collectionId
  } = song

  const onClickChangeCurrentSong = () => setCurrentSong(song)
  const onClickSetRecentlyListenedSongs = () => {
    const listenedSongsAfterDeletion = recentlyListenedSongs
      .filter(listenedSong => listenedSong.trackId !== song.trackId)
      .splice(0, 4)
    setRecentlyListenedSongs([{ trackId, trackName, artistName, artworkUrl60, collectionId }, ...listenedSongsAfterDeletion])
  }

  const handleOnClickPlay = () => {
    onClickChangeCurrentSong();
    onClickSetRecentlyListenedSongs();
  }

  return (
    <>
      <div
        onDoubleClick={ handleOnClickPlay }
        className="group opacity-80 font-semibold flex flex-row items-center gap-5 
        justify-between w-full hover:bg-light-gray hover:opacity-100 p-8 rounded select-none transition duration-200">
        <div className="hover:cursor-pointer">
          <span className="group-hover:hidden basis-4 font-black left-0 text-center">
            { index }
          </span>
          <PlaySVG 
            className="hidden group-hover:inline-block fill-white"
            onClick={ handleOnClickPlay }
          />
        </div>
        <h1 className="pointer-events-none">
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