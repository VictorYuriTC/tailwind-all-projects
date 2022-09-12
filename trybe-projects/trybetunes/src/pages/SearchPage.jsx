import React, { useState } from 'react'
import AlbumCard from '../components/cards/AlbumCard';
import Header from '../components/menus/Header';
import { ENTER } from '../constants/strings';
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
    <div className="min-h-screen">
      <Header />
      <div className='bg-his-purple'>
        <label htmlFor="" className="flex flex-row justify-center gap-2">
          <span className="text-white font-semibold">
            Artist name
          </span>
          <input
            type="text"
            value={ searchedArtist }
            onChange={ ({ target: { value }}) => setSearchedArtist(value) }
            onKeyDown={ onEnterKeyDownSearchArtist }/>
        </label>
      </div>
      <div className="grid grid-cols-3">
        { renderAlbums.map(album => <AlbumCard album={ album }/>) }
      </div>
    </div>
  );
}
export default SearchPage;