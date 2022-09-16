import React, { useContext, useEffect, useState } from 'react'
import FavoriteSongCard from '../components/cards/FavoriteSongCard';
import Header from '../components/menus/Header';
import SongsContext from '../context/SongsContext';
import { getCollectionDataFromAPI } from '../services/iTunesAPI';

function FavoritesPage() {
  const contextValue = useContext(SongsContext);
  const { favorites: { favoriteSongs }} = contextValue;
  const [fav, setFav] = useState([]);

  useEffect(() => {
    console.log(favoriteSongs)
  }, [])

  return (
    <div className='flex flex-col min-h-screen bg-black'>
      <div>
        <Header />
      </div>


      <div className="pt-20 bg-black">
        { 
          <div className="grid grid-cols-2 lg:grid-cols-3 bg-black gap-10">
            { favoriteSongs.reverse().map(favoriteSong => (
              <FavoriteSongCard favoriteSong={ favoriteSong }/>
            )) }
          </div>
        }
      </div>
    </div>
  );
}
export default FavoritesPage;