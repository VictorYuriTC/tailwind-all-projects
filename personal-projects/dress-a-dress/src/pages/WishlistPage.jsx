import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { FAVORITE_CLOTHES } from '../constants/constants';
import { getItemFromLocalStorage } from '../localStorage/localStorage';
import fashionData from '../services/fashionData';
import FavoriteClothCard from '../components/FavoriteClothCard';

function WishlistPage(props) {
  const [renderFavorites, setRenderFavorites] = useState();

  useEffect(() => {
    const getFavorites = () => {
      const favorites = getItemFromLocalStorage(FAVORITE_CLOTHES);
      const selectedFavorites = fashionData
        .filter(cloth => favorites.includes(cloth.articleCode))
        .map(favoriteCloth => <FavoriteClothCard cloth={ favoriteCloth }/>)
      setRenderFavorites(selectedFavorites)
      console.log(favorites)
      console.log(fashionData)
      console.log(selectedFavorites)
    }

    getFavorites();
  }, [])
  
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-4">
        { renderFavorites }
      </div>
    </div>
  );
}
export default WishlistPage;