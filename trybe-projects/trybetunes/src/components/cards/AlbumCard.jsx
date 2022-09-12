import React from 'react'

function AlbumCard({ album }) {
  return (
    <div className="flex flex-col">
      <div className="aspect-h-1 aspect-w-1">
        <img
          src={album.artworkUrl100}
          alt={ album.collectionCensoredName }
          className=""
        />
      </div>

      <h1>{ album.collectionCensoredName }</h1>

      <div>
        <h1>{ album.artistName }</h1>
        <h1>Released in { album.releaseDate.slice(0, 4) }</h1>
      </div>
    </div>
  );
}
export default AlbumCard;