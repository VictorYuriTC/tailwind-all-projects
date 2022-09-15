import React, { useContext, useEffect } from 'react'
import SongsContext from '../context/SongsContext';
import { getCollectionDataFromAPI } from '../services/iTunesAPI';

function FavoritesPage() {
  const contextValue = useContext(SongsContext);
  const { favorites: { favoriteSongs }} = contextValue;

  useEffect(() => {
    const getFavoriteSongs = () => {
      const favoriteSongsTrackIds = favoriteSongs
        .map(({ trackId }) => trackId);
    }
    getFavoriteSongs()
  }, [])

  return (
    <div className=''>

    </div>
  );
}
export default FavoritesPage;