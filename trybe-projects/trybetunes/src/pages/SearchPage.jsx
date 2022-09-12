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

      <div className="flex bg-black px-4">
        <aside className="w-1/3">
          <label
            htmlFor=""
            className="flex flex-row items-center justify-center gap-2"
          >
            <MagnifyingGlassSVG
              className="absolute fill-white left-6"/>
            <input
              type="text"
              value={ searchedArtist }
              placeholder="Search by album name"
              onChange={ ({ target: { value }}) => setSearchedArtist(value) }
              onKeyDown={ onEnterKeyDownSearchArtist }
              className="rounded-full p-3 indent-6 w-full focus:outline-none"
            />
          </label>
        </aside>
      
        <div className="bg-black grid grid-cols-4 px-20 gap-x-10 gap-y-5">
          { renderAlbums.map(album => <AlbumCard key={ album.collectionId} album={ album }/>) }
        </div>
     </div>
    </div>
  );
}
export default SearchPage;