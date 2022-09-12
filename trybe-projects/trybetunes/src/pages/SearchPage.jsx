import React, { useContext, useEffect, useState } from 'react'
import AlbumCard from '../components/cards/AlbumCard';
import Header from '../components/menus/Header';
import SongOptionsBar from '../components/menus/SongOptionsBar';
import MagnifyingGlassSVG from '../components/svgs/MagnifyingGlassSVG';
import { ENTER } from '../constants/strings';
import SongsContext from '../context/SongsContext';
import { getAlbumsFromAPI } from '../services/iTunesAPI';

function SearchPage(props) {
  const contextValue = useContext(SongsContext);
  const {
    listened: { recentlyListenedSongs },
    searched: { recentlySearchedArtists }
  } = contextValue;
  const [searchedArtist, setSearchedArtist] = useState('');
  const [renderAlbums, setRenderAlbums] = useState([]);
  const onEnterKeyDownSearchArtist = async ({ key, target: { value }}) => {
    if (key === ENTER) getAlbums(value)
  }

  const getAlbums = async (value) => {
    const foundAlbums = await getAlbumsFromAPI(value);
    console.log(foundAlbums);
    setRenderAlbums(foundAlbums);
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <div className="flex bg-black px-1">
        <aside className="flex flex-col gap-5 w-2/5 left-0">
          <label
            htmlFor=""
            className="flex flex-row items-center justify-center gap-2 w-fit"
          >
            <MagnifyingGlassSVG
              className="absolute fill-white left-4"/>
            <input
              type="text"
              value={ searchedArtist }
              placeholder="Search by artist name"
              onChange={ ({ target: { value }}) => setSearchedArtist(value) }
              onKeyDown={ onEnterKeyDownSearchArtist }
              className="rounded-full p-3 indent-7 w-fit focus:outline-none"
            />
          </label>

          <div className="flex flex-col items-start">
            <h1 className="text-lg font-black text-white">
              Recently searched
            </h1>
            <div className="flex flex-col items-start gap">
              { recentlySearchedArtists.map(({ artistName }) => (
                <div className="flex flex-col items-start">
                  <span className="text-white">
                    <span className="">{ artistName }</span>
                  </span>
                </div>
              )) }
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h1 className="text-lg font-bold text-white">
                Recently listened
              </h1>
            </div>

            <div className="flex flex-col items-start gap-2">
              { recentlyListenedSongs.map(({ trackName, trackId, artistName }) => (
                <div className="flex flex-col items-start">
                  <span
                    key={ trackId }
                    className="text-white"
                  >
                    { trackName }
                  </span>
                  <span className="text-white">
                    by <span className="">{ artistName }</span>
                  </span>
                </div>
              )) }
            </div>
          </div>
        </aside>
      
        <div className="bg-black grid grid-cols-1 px-5">
          { renderAlbums.map(album => <AlbumCard key={ album.collectionId} album={ album }/>) }
        </div>
     </div>
    </div>
  );
}
export default SearchPage;