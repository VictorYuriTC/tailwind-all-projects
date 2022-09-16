import React, { useContext, useEffect, useState } from 'react'
import AlbumCard from '../components/cards/AlbumCard';
import Header from '../components/menus/Header';
import SearchAsideBar from '../components/menus/SearchAsideBar';
import SongsContext from '../context/SongsContext';
import { getAlbumsFromAPI } from '../services/iTunesAPI';

function SearchPage(props) {
  const contextValue = useContext(SongsContext);
  const { searched: { searchedArtist }} = contextValue;
  const [renderAlbums, setRenderAlbums] = useState([]);
  
  useEffect(() => {
    const getAlbums = async () => {
      if (searchedArtist.length < 1) return;

      const foundAlbums = await getAlbumsFromAPI(searchedArtist);
      const maxFoundAlbums = foundAlbums
        .splice(0, 20);
      setRenderAlbums(maxFoundAlbums);
    }
    getAlbums();
  }, [searchedArtist])

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <div className="flex bg-black pt-12">
        <div>
          <SearchAsideBar />
        </div>
      
        <div className="bg-black grid grid-cols-1 px-5 w-full">
          {
            renderAlbums.length > 0
            &&  renderAlbums.map(album => <AlbumCard key={ album.collectionId } album={ album }/>) 
          }
        </div>
      </div>
    </div>
  );
}
export default SearchPage;