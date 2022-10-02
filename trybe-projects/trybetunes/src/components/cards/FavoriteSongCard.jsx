import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SongsContext from '../../context/SongsContext';
import StarSVG from '../svgs/StarSVG';
import { Link } from 'react-router-dom';

function FavoriteSongCard({ favoriteSong }) {
  const contextValue = useContext(SongsContext);
  const {
    searched: {
      setSearchedArtist
    },
    playingSong: {
      setCurrentSong
    },
    favorites: {
    favoriteSongs,
    setFavoriteSongs
  }} = contextValue;
  const [cardStyle, setCardStyle] = useState('');

  const navigate = useNavigate()

  const removeFavoriteSong = () => {
    const favoriteSongsAfterDeletion = favoriteSongs
      .filter(song => song.trackId !== favoriteSong.trackId);
    setFavoriteSongs(favoriteSongsAfterDeletion)
  }

  const handleOnClickAlbumImage = () => {
    navigate(`/album/${ favoriteSong.collectionId }`)
  }

  const handleOnClickStar = () => {
    removeFavoriteSong();
  }

  return (
    <div
      className="relative flex flex-col items-center justify-between bg-gray-white rounded-lg justify-self-center px-6 py-[4.5rem] shadow shadow-gray-600 space-y-4 w-60 md:w-80 md:space-y-6 lg:space-y-8"
      style={ { animation: cardStyle } } 
      >
      <div>
        <img
          src={ favoriteSong.artworkUrl100 }
          alt={ `${ favoriteSong.trackName } album cover`}
          className="shadow-md shadow-gray-600 hover:cursor-pointer"
          onClick={ handleOnClickAlbumImage }
        />
        </div>
      <div className="grid lg:flex lg:flex-col items-center">
        <Link
          to={`/album/${ favoriteSong.collectionId }`}
          onClick={ () => setCurrentSong({ ...favoriteSong })}
          className="font-medium">
          { favoriteSong.trackName }
        </Link>
        <Link
          to="/search"
          onClick={ setSearchedArtist(favoriteSong.artistName)}
        >
          by <span className="font-medium">{ favoriteSong.artistName }</span>
        </Link>
        <Link
          to={`/album/${ favoriteSong.collectionId }`}>
          from <span className="font-medium">{ favoriteSong.collectionName }</span>
        </Link>
      </div>
      <div className="grid lg:flex lg:flex-col items-center">
        <span className="font-light">
          Favorite since { favoriteSong.addedAsFavoriteDate }
        </span>
        <span className="font-light">
          Length: { (favoriteSong.trackTimeMillis / 60000).toFixed(2) } min
        </span>
        <span className="font-light">
          Costing ${ favoriteSong.trackPrice } { favoriteSong.currency }
        </span>
        <StarSVG
          className="absolute top-0 right-0 m-2 w-7 h-7 fill-yellow-600 stroke-yellow-600 hover:cursor-pointer hover:opacity-50"
          onClick={ handleOnClickStar }
        />
      </div>
    </div>
  );
}
export default FavoriteSongCard;