import React from 'react'
import { Link } from 'react-router-dom';

function AlbumCard({ album }) {
  const { collectionId } = album;
  const AMOUNT_OF_TRACKS = Number(album.trackCount);

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
        <h1 className="">{ album.collectionCensoredName }</h1>
        <h1 className="basis">by { album.artistName }</h1>
        <h1 className="basis">{ album.primaryGenreName  }</h1>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">Content</h1>
        <h1 className="basis">{ album.collectionType}</h1>
        <h1 className="basis">{
          AMOUNT_OF_TRACKS > 1
            ? `${ AMOUNT_OF_TRACKS } tracks`
            : `${ AMOUNT_OF_TRACKS } track`
        }</h1>
        <h1 className="">${ album.collectionPrice } { album.currency}</h1>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">Release</h1>
        <h1 className="basis">{ album.country }</h1>
        <h1 className="">{ album.releaseDate.slice(0, 4)}</h1>
        <h1 className="basis">{ album.copyright }</h1>
      </div>

    </Link>
  );
}
export default AlbumCard;