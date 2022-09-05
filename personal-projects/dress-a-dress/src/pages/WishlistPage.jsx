import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { FAVORITE_CLOTHES } from '../constants/constants';
import { getItemFromLocalStorage } from '../localStorage/localStorage';
import fashionData from '../services/fashionData';
import FavoriteClothCard from '../components/FavoriteClothCard';

function WishlistPage(props) {
  const [renderFavorites, setRenderFavorites] = useState();
  const [amountOfFavoriteItems, setAmountOfFavoriteItems] = useState();

  useEffect(() => {
    const getFavorites = () => {
      const favorites = getItemFromLocalStorage(FAVORITE_CLOTHES);
      const selectedFavorites = fashionData
        .filter(cloth => favorites.includes(cloth.articleCode))
        .map(favoriteCloth => <FavoriteClothCard cloth={ favoriteCloth }/>)
      setRenderFavorites(selectedFavorites)
      
      if (favorites.length === 0) setAmountOfFavoriteItems('')
      if (favorites.length === 1) setAmountOfFavoriteItems(`${favorites.length} item`)
      if (favorites.length > 1) setAmountOfFavoriteItems(`${favorites.length} items`)
    }

    getFavorites();
  }, [])
  
  return (
    <div className="pl-14">
      <Header />
      <h1 className="text-5xl text-center font-Poppins">Favorites</h1>
      <h4 className="text-[#6b6b6b] text-end mr-6">{ amountOfFavoriteItems }</h4>
      <div className="grid grid-cols-4">
        { renderFavorites }
      </div>
    </div>
  );
}
export default WishlistPage;