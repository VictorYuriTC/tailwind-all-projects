import React, { useContext, useEffect, useState } from 'react'
import AlbumCard from '../components/cards/AlbumCard';
import Header from '../components/menus/Header';
import SearchAsideBar from '../components/menus/SearchAsideBar';
import SongOptionsBar from '../components/menus/SongOptionsBar';
import MagnifyingGlassSVG from '../components/svgs/MagnifyingGlassSVG';
import { ENTER } from '../constants/strings';
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
      console.log(foundAlbums);
      setRenderAlbums(foundAlbums);
    }
    getAlbums();
  }, [searchedArtist])


  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <div className="flex bg-black px-1">
        <SearchAsideBar />
      
        <div className="bg-black grid grid-cols-1 px-5">
          {
            renderAlbums.length > 0
            &&  renderAlbums.map(album => <AlbumCard key={ album.collectionId} album={ album }/>) 
          }
        </div>
     </div>
    </div>
  );
}
export default SearchPage;