import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { EXPLICIT, NOT_EXPLICIT, NO_PARENTAL_ADVISORY } from '../../constants/strings';
import SongsContext from '../../context/SongsContext';

function AlbumCard({ album }) {
  const {
    collectionId,
    artistName,
    artistId,
    primaryGenreName
  } = album;
  const AMOUNT_OF_TRACKS = Number(album.trackCount);
  const contextValue = useContext(SongsContext);
  const { searched: { recentlySearchedArtists, setRecentlySearchedArtists }} = contextValue;

  const onClickSetRecentlyListenedSongs = () => {
    const listenedSongsAfterDeletion = recentlySearchedArtists
      .filter(listenedSong => listenedSong.artistId !== album.artistId)
      .splice(0, 4)
      setRecentlySearchedArtists([{ artistName, artistId, primaryGenreName }, ...listenedSongsAfterDeletion])
  }

  const handleOnLinkClick = () => onClickSetRecentlyListenedSongs()

  useEffect(() => {
    console.log(album)
  }, [])

  return (
    <Link
      to={`/album/${ collectionId }`}
      className="opacity-90 text-white gap-4 border-b border-white
        border-opacity-50 hover:bg-light-gray hover:opacity-100 transition duration-300
        grid grid-cols-2 py-6
        md:grid-cols-3
        lg:grid-cols-4 lg:py-8"
      onClick={ handleOnLinkClick }
    >
      <div className="relative shrink-0 pb-[20%] lg:pb-[50%]">
        <img
          src={ album.artworkUrl100 }
          alt={ album.collectionCensoredName }
          className="absolute shrink-0 object-scale-down w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">Album</h1>
        <h1 className="">{ album.collectionCensoredName }</h1>
        <h1 className="basis">by { album.artistName }</h1>
        <h1 className="basis">{ album.primaryGenreName  }</h1>
        <h1 className="md:hidden">${ album.collectionPrice } { album.currency}</h1>
      </div>
      <div className="hidden md:flex md:flex-col">
        <h1 className="font-semibold">Content</h1>
        <h1 className="basis">{ album.collectionType}</h1>
        <h1 className="basis">
          {
            AMOUNT_OF_TRACKS > 1
              ? `${ AMOUNT_OF_TRACKS } tracks`
              : `${ AMOUNT_OF_TRACKS } track`
          }
        </h1>
        <h1 className="">${ album.collectionPrice } { album.currency}</h1>
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <h1 className="font-semibold">Release</h1>
        <h1 className="basis">{ album.country }</h1>
        <h1 className="">{ album.releaseDate.slice(0, 4)}</h1>
        <h1 className="">{
          album.collectionExplicitness === NOT_EXPLICIT
            ? NO_PARENTAL_ADVISORY 
            : 'Explicit' 
        }</h1>
      </div>

    </Link>
  );
}
export default AlbumCard;