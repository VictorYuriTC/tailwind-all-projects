import React from 'react'

function FavoriteSongCard({ favoriteSong }) {
  return (
    <div className="flex flex-col items-center bg-white w-fit justify-self-center">
      <div>
        <img
          src={ favoriteSong.artworkUrl100 }
            alt={ `${ favoriteSong.trackName } album cover`}
          />
        </div>
      <span>
        { favoriteSong.trackName } song
      </span>
      <span>
        by { favoriteSong.artistName }
      </span>
      <span>
        favorite since { favoriteSong.addedAsFavoriteDate }
      </span>
    </div>
  );
}
export default FavoriteSongCard;