import React, { useContext, useEffect, useState } from 'react'
import AlbumCard from '../components/cards/AlbumCard';
import Header from '../components/menus/Header';
import SongOptionsBar from '../components/menus/SongOptionsBar';
import MagnifyingGlassSVG from '../components/svgs/MagnifyingGlassSVG';
import { ENTER } from '../constants/strings';
import SongsContext from '../context/SongsContext';
import { getAlbumsFromAPI } from '../services/iTunesAPI';

function SearchPage(props) {
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
        <aside className="w-2/5 left-0">
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
        </aside>
      
        <div className="bg-black grid grid-cols-1 px-5">
          { renderAlbums.map(album => <AlbumCard key={ album.collectionId} album={ album }/>) }
        </div>
     </div>
    </div>
  );
}
export default SearchPage;