import React from 'react'
import { Link } from 'react-router-dom';

function AlbumCard({ album }) {
  const { collectionId } = album;
  return (
    <Link
      to={`/album/${ collectionId }`}
      className="flex flex-col text-white">
      <div className="aspect-h-1 aspect-w-1">
        <img
          src={album.artworkUrl100}
          alt={ album.collectionCensoredName }
          className="shrink-0 w-full"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">{ album.collectionCensoredName }</h1>
        <h1 className="basis">{ album.artistName }</h1>
        <h1 className="basis">Released in { album.releaseDate.slice(0, 4) }</h1>
      </div>
    </Link>
  );
}
export default AlbumCard;