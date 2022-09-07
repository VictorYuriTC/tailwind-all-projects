import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import CartClothCard from '../components/cards/CartClothCard';
import Header from '../components/menus/Header';
import { CART_CLOTHES } from '../constants/constants';
import ClothesContext from '../context/ClothesContext';
import { getItemFromLocalStorage } from '../local_storage/localStorage';
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
    <div className="flex flex-col bg-main-bg min-h-screen gap-10 pl-8 pr-8 pt-10">
      <div>
        <Header />
      </div>
      <div className="flex flex-col
        sm:pl-[3rem] sm:pr-[3rem]
        md:pl-[6rem] md:pr-[6rem]
        lg:pl-[12rem] lg:pr-[12rem]"
      >
        <h1 className="text-4xl text-center font-bold">Shopping bag</h1>
        <div className="flex items-center justify-between">{ tipPhrase }</div>
        <div className="grid gap-9">
          <span>{ renderCartClothes }</span>
        </div>
      </div>
    </div>
  );
}
export default CartPage;