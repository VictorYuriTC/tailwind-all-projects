import React from 'react'
import { Link } from 'react-router-dom';

function AlbumCard({ album }) {
  const { collectionId } = album;
  return (
    <Link
      to={`/album/${ collectionId }`}
      className="grid grid-cols-4 items-center text-white gap-4 border-b hover:bg-light-gray">
      <div className="shrink-0">
        <img
          src={album.artworkUrl100}
          alt={ album.collectionCensoredName }
          className="shrink-0 object-scale-down w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">Album</h1>
        <h1 className="hover:underline">{ album.collectionCensoredName }</h1>
        <h1 className="basis">by { album.artistName }</h1>
        <h1 className="basis">{ album.primaryGenreName  }</h1>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">Content</h1>
        <h1 className="hover:underline">${ album.collectionPrice } { album.currency}</h1>
        <h1 className="basis">{ album.collectionType}</h1>
        <h1 className="basis">{ album.trackCount} tracks</h1>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">Release</h1>
        <h1 className="basis">{ album.country }</h1>
        <h1 className="hover:underline">{ album.releaseDate.slice(0, 4)}</h1>
        <h1 className="basis">{ album.copyright }</h1>
      </div>

    </Link>
  );
}
export default AlbumCard;