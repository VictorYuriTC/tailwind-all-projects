import React, { useContext, useEffect, useState } from 'react'
import SongsContext from '../../context/SongsContext';
import PlaySVG from '../svgs/PlaySVG';
import StarSVG from '../svgs/StarSVG';

function SongCard({ song, index }) {
  const contextValue = useContext(SongsContext)
  const {
    playingSong: { setCurrentSong },
    listened: { recentlyListenedSongs, setRecentlyListenedSongs },
    favorites: { favoriteSongs, setFavoriteSongs }
  } = contextValue
  
  const {
    artistName,
    currency,
    trackPrice,
    trackName,
    trackId,
    artworkUrl100,
    collectionId
  } = song

  const [starColor, setStarColor] = useState('');
  const isFavoriteSong = favoriteSongs.some(favoriteSong => favoriteSong.trackId === trackId);

  useEffect(() => {
    if (isFavoriteSong) setStarColor('fill-yellow-600 stroke-yellow-600')
    if (!isFavoriteSong) setStarColor('')
  }, [favoriteSongs])

  const onClickChangeCurrentSong = () => setCurrentSong(song)
  const onClickSetRecentlyListenedSongs = () => {
    const listenedSongsAfterDeletion = recentlyListenedSongs
      .filter(listenedSong => listenedSong.trackId !== song.trackId)
      .splice(0, 4)
    setRecentlyListenedSongs([{ trackId, trackName, artistName, artworkUrl100, collectionId }, ...listenedSongsAfterDeletion])
  }

  const handleOnClickPlay = () => {
    onClickChangeCurrentSong();
    onClickSetRecentlyListenedSongs();
  }

  const handleOnClickFavorite = () => {
    if (isFavoriteSong) {
      const favoriteSongsAfterDeletion = favoriteSongs
        .filter(favoriteSong => favoriteSong.trackId !== trackId)
      setFavoriteSongs(favoriteSongsAfterDeletion);
      return;
    }

    setFavoriteSongs([...favoriteSongs, { trackId, collectionId }])
  }

  return (
    <>
      <div
        onDoubleClick={ handleOnClickPlay }
        className="group opacity-80 font-semibold flex flex-row items-center gap-5 
        justify-between w-full hover:bg-light-gray hover:opacity-100 p-8 rounded select-none transition duration-200">
        <div className="flex items-center hover:cursor-pointer">
          <span className="group-hover:hidden font-black left-0 text-center text-lg">
            { index }
          </span>
          <PlaySVG 
            onClick={ handleOnClickPlay }
            className="hidden absolute group-hover:inline-block fill-white"
          />
          <StarSVG
            onClick={ handleOnClickFavorite }
            className={`${ starColor } absolute ml-8`}
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