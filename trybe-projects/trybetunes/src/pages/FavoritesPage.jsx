import React, { useContext, useEffect } from 'react'
import FavoriteSongCard from '../components/cards/FavoriteSongCard';
import Header from '../components/menus/Header';
import SearchAsideBar from '../components/menus/SearchAsideBar';
import SongsContext from '../context/SongsContext';

function FavoritesPage() {
  const contextValue = useContext(SongsContext);
  const { favorites: { favoriteSongs }} = contextValue;

  useEffect(() => {
    console.log(favoriteSongs)
  }, [])

  return (
    <div className='flex flex-col min-h-screen bg-black'>
      <div>
        <Header />
      </div>

      <div className="w-fit flex flex-col items-center md:flex-row bg-black pt-6 gap-4 md:gap-0 md:pt-12">
        <div>
          <SearchAsideBar />
        </div>

        <div className="text-white">
        { favoriteSongs.length > 0 
            ? <div className="grid md:grid-cols-2 lg:grid-cols-3 p-7">
              { favoriteSongs.slice().reverse().map(favoriteSong => (
                <FavoriteSongCard favoriteSong={ favoriteSong }/>
              )) }
            </div>
            : <div className="flex flex-col justify-center items-center space-y-8">
                <span className="text-3xl font-medium">
                  No favorite songs
                </span>
               <div className="flex flex-col w-2/3 md:w-1/2 space-y-8">
                <span className="font-light">
                    If you want to save your favorite songs, simply click on the stars placed on each song and they will be shown here.
                  </span>
                  <span className="text-xl font-medium">
                    Try it!
                  </span>
               </div>
              </div>
        }
      </div>

      </div>
    </div>
  );
}
export default FavoritesPage;