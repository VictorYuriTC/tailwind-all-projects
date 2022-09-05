import React, { useEffect, useState } from 'react'
import CartClothCard from '../components/CartClothCard';
import Header from '../components/Header';
import { CART_CLOTHES } from '../constants/constants';
import { getItemFromLocalStorage } from '../localStorage/localStorage';
import fashionData from '../services/fashionData';

function CartPage(props) {
  const [renderCartClothes, setRenderCartClothes] = useState([]);

  useEffect(() => {
    const getCartClothes = () => {
      const cartClothes = getItemFromLocalStorage(CART_CLOTHES);
      const selectedFavorites = fashionData
        .filter(cloth => cartClothes.includes(cloth.articleCode))
        .map(cartCloth => (<CartClothCard key={ cartCloth.articleCode } cloth={ cartCloth }/>))
      setRenderCartClothes(selectedFavorites);
    }

    getCartClothes();
  }, [])

  return (
    <div className="bg-main-bg">
      <Header />
      <h1 className="text-4xl text-center mt-10">Shopping bag</h1>
      <div className="flex flex-col p-3 gap-9">
        { renderCartClothes }
      </div>
    </div>
  );
}
export default CartPage;