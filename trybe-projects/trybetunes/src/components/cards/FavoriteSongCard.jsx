import React, { useContext, useEffect, useState } from 'react'
import SongsContext from '../../context/SongsContext';
import StarSVG from '../svgs/StarSVG';

function FavoriteSongCard({ favoriteSong }) {
  const contextValue = useContext(SongsContext);
  const { favorites: { favoriteSongs, setFavoriteSongs }} = contextValue;
  const [cardStyle, setCardStyle] = useState('');

  const removeFavoriteSong = () => {
    const favoriteSongsAfterDeletion = favoriteSongs
      .filter(song => song.trackId !== favoriteSong.trackId);
    setFavoriteSongs(favoriteSongsAfterDeletion)
  }

  const handleOnClickStar = () => {
    removeFavoriteSong();
  }

  return (
    <div
      className="relative flex flex-col items-center justify-between bg-gray-white rounded-lg justify-self-center px-6 py-[4.5rem] shadow shadow-gray-600 space-y-4 w-full h-full md:space-y-6 lg:space-y-8"
      style={ { animation: cardStyle } } 
      >
      <div>
        <img
          src={ favoriteSong.artworkUrl100 }
          alt={ `${ favoriteSong.trackName } album cover`}
          className="shadow-md shadow-gray-600"
        />
        </div>
      <div className="grid lg:flex lg:flex-col items-center">
        <span className="font-medium">
          { favoriteSong.trackName }
        </span>
        <span>
          by <span className="font-medium">{ favoriteSong.artistName }</span>
        </span>
        <span>
          from <span className="font-medium">{ favoriteSong.collectionName }</span>
        </span>
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