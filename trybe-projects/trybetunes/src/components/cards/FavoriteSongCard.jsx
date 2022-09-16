import React, { useState } from 'react'

function FavoriteSongCard({ favoriteSong }) {
  const [cardStyle, setCardStyle] = useState('');

  return (
    <div
      className="flex flex-col items-center bg-white w-fit justify-self-center p-8 shadow-md shadow-gray-700"
      style={ { animation: cardStyle } } 
      >
      <div>
        <img
          src={ favoriteSong.artworkUrl100 }
          alt={ `${ favoriteSong.trackName } album cover`}
        />
        </div>
      <span>
        { favoriteSong.trackName }
      </span>
      <span>
        by { favoriteSong.artistName }
      </span>
      <span>
        from { favoriteSong.collectionName }
      </span>
      <span>
        Favorite since { favoriteSong.addedAsFavoriteDate }
      </span>
      <span>
        Length: { (favoriteSong.trackTimeMillis / 60000).toFixed(2) } min
      </span>
      <span>
        Costing ${ favoriteSong.trackPrice } { favoriteSong.currency }
      </span>
    </div>
  );
}
export default FavoriteSongCard;