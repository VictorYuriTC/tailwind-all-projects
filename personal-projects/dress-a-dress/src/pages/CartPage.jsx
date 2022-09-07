import React, { useContext, useEffect, useState } from 'react'
import CartClothCard from '../components/CartClothCard';
import Header from '../components/Header';
import { CART_CLOTHES } from '../constants/constants';
import ClothesContext from '../context/ClothesContext';
import { getItemFromLocalStorage } from '../localStorage/localStorage';
import fashionData from '../services/fashionData';

function CartPage(props) {
  const contextValue = useContext(ClothesContext);
  const { cart: { amountOfCartItems, setAmountOfCartItems }} = contextValue;
  const [renderCartClothes, setRenderCartClothes] = useState([]);
  const [tipPhrase, setTipPhrase] = useState('');

  useEffect(() => {
    const getCartClothes = () => {
      const cartClothes = getItemFromLocalStorage(CART_CLOTHES);
      const selectedFavorites = fashionData
        .filter(cloth => cartClothes.includes(cloth.articleCode))
        .map(cartCloth => (<CartClothCard key={ cartCloth.articleCode } cloth={ cartCloth }/>))
      setRenderCartClothes(selectedFavorites);
      
      if (cartClothes.length === 0) {
        setTipPhrase(
          <>
            <h1 className="text-center text-2xl mt-12 p-5">
              YOUR SHOPPING BAG IS EMPTY!
            </h1>
          </>
        )
      }
    }
    getCartClothes();
  }, [])

  return (
    <div className="bg-main-bg min-h-screen">
      <Header />
      <h1 className="text-4xl text-center mt-10 font-bold">Shopping bag</h1>
      <div className="flex items-center justify-center">{ tipPhrase }</div>
      <div className="grid p-0 gap-9">
        { renderCartClothes }
      </div>
    </div>
  );
}
export default CartPage;