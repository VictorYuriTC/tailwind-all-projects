import React, { useEffect, useState } from 'react'
import Header from '../components/menus/Header';
import { FAVORITE_CLOTHES } from '../constants/constants';
import { getItemFromLocalStorage } from '../local_storage/localStorage';
import fashionData from '../services/fashionData';
import FavoriteClothCard from '../components/cards/FavoriteClothCard';
import { useNavigate } from 'react-router-dom';;

function WishlistPage(props) {
  const [renderFavorites, setRenderFavorites] = useState();
  const [amountOfFavoriteItems, setAmountOfFavoriteItems] = useState();
  const [tipPhrase, setTipPhrase] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getFavorites = () => {
      const favorites = getItemFromLocalStorage(FAVORITE_CLOTHES);
      const selectedFavorites = fashionData
        .filter(cloth => favorites.includes(cloth.articleCode))
        .map(favoriteCloth => (<FavoriteClothCard key={ favoriteCloth.articleCode } cloth={ favoriteCloth }/>))
      setRenderFavorites(selectedFavorites)
      
      if (favorites.length > 1) setAmountOfFavoriteItems(`${favorites.length} items`)
      if (favorites.length === 1) setAmountOfFavoriteItems(`${favorites.length} item`)
      if (favorites.length === 0) {
        setAmountOfFavoriteItems('')
        setTipPhrase(
        <>
          <h1 className="font-medium">
            SAVE YOUR FAVORITE ITEMS
          </h1>
          <p className="mt-3 text-sm indent-10">
            Want to save the items you love? Just click on the heart icon found on the product image and it will show up here.
          </p>
          <button
            onClick={ () => { navigate('/') } }
            className="bg-[#232323] mt-8 pl-4 pr-4 pt-3 pb-3 gap-2 hover:bg-[#555555]"
          >
            <span className="text-white text-center font-medium">
              Browse now
            </span>
          </button>
        </>
        )
      }
    }
    getFavorites();
  }, [])
  
  return (
    <div className="flex flex-col bg-main-bg min-h-screen gap-8"
    >
      <Header />
      <div className="flex flex-col lg:pl-6 lg:pr-6
        xl:pl-[4.5rem] xl:pr-[4.5rem] gap-8">
        <h1 className="text-4xl text-center font-bold">Favorites</h1>
        <h3 className="text-center">{ tipPhrase }</h3>
        <h3 className="text-[#6b6b6b] text-end text-sm">{ amountOfFavoriteItems }</h3>
        <div className="grid grid-cols-4 gap-1 gap-y-[4rem]"
        >
          { renderFavorites }
        </div>
      </div>
    </div>
  );
}
export default WishlistPage;