import React, { useState } from 'react'

function FavoriteSongCard({ favoriteSong }) {
  const [cardStyle, setCardStyle] = useState('');

  return (
    <div
      className="flex flex-col items-center justify-between bg-gray-white rounded-lg  w-full justify-self-center p-8 shadow shadow-gray-600 lg:space-y-8"
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
        <span className="font-semibold">
          { favoriteSong.trackName }
        </span>
        <span>
          by <span className="font-semibold">{ favoriteSong.artistName }</span>
        </span>
        <span>
          from <span className="font-semibold">{ favoriteSong.collectionName }</span>
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
      </div>
    </div>
  );
}
export default FavoriteSongCard;