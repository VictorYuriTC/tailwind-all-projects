import React, { useContext, useEffect, useState } from 'react'
import SongsContext from '../../context/SongsContext';
import PauseSVG from '../svgs/PauseSVG';
import PlaySVG from '../svgs/PlaySVG';
import StarSVG from '../svgs/StarSVG';
import StopSVG from '../svgs/StopSVG';

function SongCard({ song, index }) {
  const contextValue = useContext(SongsContext)
  const {
    playingSong: { currentSong, setCurrentSong, },
    listened: { recentlyListenedSongs, setRecentlyListenedSongs },
    favorites: { favoriteSongs, setFavoriteSongs }
  } = contextValue

  const [isStopped, setIsStopped] = useState(null);

  const [favoriteModalText, setFavoriteModalText] = useState('');
  const [favoriteModalTextDisplay, setFavoriteModalTextDisplay] = useState('hidden');
  const [favoriteModalTextOpacity, setFavoriteModalTextOpacity] = useState('0');
  
  const {
    artistName,
    currency,
    trackPrice,
    trackName,
    trackId,
    artworkUrl100,
    collectionId,
    previewUrl
  } = song

  const [starColor, setStarColor] = useState('');
  const isFavoriteSong = favoriteSongs.some(favoriteSong => favoriteSong.trackId === trackId);
  const isThisSongBeingPlayed = currentSong.trackId === trackId

  useEffect(() => {
    if (isFavoriteSong) setStarColor('fill-yellow-600 stroke-yellow-600')
    if (!isFavoriteSong) setStarColor('')
  }, [favoriteSongs])

  useEffect(() => {
    const changeFavoriteModalText = () => {
      if (favoriteModalTextOpacity === '0') return;

      setFavoriteModalTextDisplay('visible')
      if (isFavoriteSong) setFavoriteModalText('Added to favorites')
      if (!isFavoriteSong) setFavoriteModalText('Removed from favorites')
      
      setTimeout(() => setFavoriteModalTextDisplay('hidden'), 3000)
    }


    changeFavoriteModalText()
  }, [isFavoriteSong])

  useEffect(() => {
    const changeFavoriteModalTextOpacity = () => {
      isFavoriteSong ? setFavoriteModalTextOpacity('1.00') : setFavoriteModalTextOpacity('0.5')
    }
    changeFavoriteModalTextOpacity();

  }, [favoriteModalText])

  const onClickChangeCurrentSong = () => setCurrentSong({ ...song })

  const onClickSetRecentlyListenedSongs = () => {
    const listenedSongsAfterDeletion = recentlyListenedSongs
      .filter(listenedSong => listenedSong.trackId !== song.trackId)
      .splice(0, 4)
    setRecentlyListenedSongs([
      { trackId,
        trackName,
        artistName,
        artworkUrl100,
        collectionId
      },
        ...listenedSongsAfterDeletion])
  }

  const handleOnClickPlay = () => {
    onClickChangeCurrentSong();
    onClickSetRecentlyListenedSongs();
  }

  const handleOnClickPause = () => {
    if (isStopped === null) {
      setIsStopped(false)
      onClickChangeCurrentSong()
      return;
    }

    if (isStopped) {
      setIsStopped(false)
      onClickChangeCurrentSong()
      return;
    }

    setIsStopped(true);
    setCurrentSong({ ...song, previewUrl: '' })
  }
  

  const handleOnClickFavorite = () => {
    if (isFavoriteSong) {
      const favoriteSongsAfterDeletion = favoriteSongs
        .filter(favoriteSong => favoriteSong.trackId !== trackId)
      setFavoriteSongs(favoriteSongsAfterDeletion);
      return;
    }

    const todayDate = new Date().toLocaleDateString()

    setFavoriteSongs([...favoriteSongs, { ...song, addedAsFavoriteDate: todayDate }])
  }

  return (
    <>
      <div
        onDoubleClick={ handleOnClickPlay }
        className="group opacity-80 font-semibold flex flex-row items-center gap-5 
        justify-between w-full hover:bg-light-gray hover:opacity-100 p-8 rounded select-none transition duration-200">
        <div className="flex items-center hover:cursor-pointer">
          <span className="w-6 h-6 group-hover:hidden left-0 text-center text-lg">
            { index }
          </span>
          <div className="absolute">
            { previewUrl !== currentSong.previewUrl
              ?  
              <PlaySVG
              onClick={ handleOnClickPlay }
              className="w-6 h-6 hidden font-black group-hover:inline-block fill-white"
              />
       
              : <StopSVG
              onClick={ handleOnClickPause }
              className="w-7 h-7 hidden font-black group-hover:inline-block fill-white stroke-2"
              />
            }
            
          </div>
          <StarSVG
            onClick={ handleOnClickFavorite }
            className={`${ starColor } absolute ml-8`}
          />
          <div className="text-white absolute ml-20">
            
            { isFavoriteSong
              ? <span
              className="border-white border px-2 py-1 rounded"
              style={
                { visibility: favoriteModalTextDisplay,
                  opacity: favoriteModalTextOpacity 
                }}
              >
              Added to favorites
            </span>
            
              : <span
              className="border-white border px-2 py-1 rounded"
              style={
                { visibility: favoriteModalTextDisplay,
                  opacity: favoriteModalTextOpacity 
                }}
              >
              Removed from favorites
            </span> }

          </div>
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