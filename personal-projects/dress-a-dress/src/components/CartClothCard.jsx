import React, { useEffect, useState } from 'react'
import AddToFavoriteHeartSVG from './svgs/AddToFavoriteHeartSVG';
import TrashSVG from './svgs/TrashSVG';
import CartPieceOption from './CartPieceOption';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../localStorage/localStorage';
import { CART_CLOTHES } from '../constants/constants';

function CartClothCard({ cloth, size, color, className }) {
  const {
    articleCode,
    price,
    title
  } = cloth;

  const [clothNumericalPrice, setClothNumericalPrice] = useState(price
    .replace('.', ',')
    .replace(/[^\w,]/g, '')
    .replace(',', '.'));
  const [clothCurrencySymbol, setClothCurrencySymbol] = useState(price
    .charAt(0));

  const [selectAmountOfPieces, setSelectAmountOfPieces] = useState('1');
  const [total, setTotal] = useState(clothNumericalPrice.replace(',', '.') * 1);

  useEffect(() => {
    const getNumericalPriceAndCurrencySymbol = () => {
      const priceWithoutSymbol = price
        .replace('.', ',')
        .replace(/[^\w,]/g, '')
        .replace(',', '.');
      const currencySymbol = price.charAt(0);
      setClothNumericalPrice(priceWithoutSymbol);
      setClothCurrencySymbol(currencySymbol);
      console.log(priceWithoutSymbol)
    }

    getNumericalPriceAndCurrencySymbol();
  }, [])

  useEffect(() => {
    setTotal(`${clothCurrencySymbol} ${Number(selectAmountOfPieces) * clothNumericalPrice}`)
  }, [selectAmountOfPieces])

  const onClickRemoveFromShoppingBag = () => {
    const cartClothes = getItemFromLocalStorage(CART_CLOTHES);
    console.log(cartClothes);
    const cartClothesAfterDeletion = cartClothes
      .filter(cartCloth => cartCloth !== articleCode)
    setItemInLocalStorage(CART_CLOTHES, cartClothesAfterDeletion)
  }

  return (
    <div className="flex flex-col items-center
      md:flex-row md:items-center pt-10 bg-main-bg xsm:pl-6 sm:pl-6 md:pl-12 lg:pl-24 xl:pl-36 gap-6">
      <div className="flex flex-col">
        <img
          src={cloth.image[0].dataAltImage}
          alt={cloth.image[0].alt}
          className={`${className} w-32 h-48`}
        />
      </div>

      <div className="flex flex-col w-1/3 gap-4">
        <div className="flex md:flex-row gap-10 sm:gap-20 justify-between items-start">
          <div>
            <h1>{ title }</h1>
            <h3>{ price }</h3>
          </div>
          <div className="group transition duration-200 group-hover:cursor-pointer hover:opacity-60 rounded-full">
            <TrashSVG
              className="group-hover:cursor-pointer"
              articleCode={ cloth.articleCode }
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 font-light sm:gap-5 md:justify-between md:flex-row md:gap-10 lg:gap-20">
          <div className="flex flex-row gap-1">
            <h3>Art. no.</h3>
            <h3>{ articleCode }</h3>
          </div>
          <div className="flex flex-row gap-1">
            <h3>Size:</h3>
            <h3>{size = 0}</h3>
          </div>
        </div>

        <div className="flex flex-col gap-3 font-light sm:gap-5 md:justify-between md:flex-row md:gap-10 lg:gap-20">
          <div className="flex flex-row gap-1">
            <h3>Color:</h3>
            <h3>{ color = 'randomColor' }</h3>
          </div>
          <div className="flex flex-row gap-1">
            <h3>Total:</h3>
            <h3>{ total }</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="border border-black w-fit pl-5 pr-5 pt-3 pb-3 bg-white">
            <AddToFavoriteHeartSVG
              articleCode={ articleCode }
              className="stroke-1 hover:cursor-pointer"
            />
          </div>
          <select
            name="amount-pieces-select"
            id="amount-pieces-select"
            value={ selectAmountOfPieces }
            onChange={({ target: { value }}) => setSelectAmountOfPieces(value)}
            className="w-20 bg-white border accent-red-500 focus:outline-none p-1"
            >
            <CartPieceOption
              value="1"
              className="accent-white"
            />
            <CartPieceOption
              value="2"
              className="accent-white"
            />
          </select>
        </div>
      </div>
    </div>
  );
}
export default CartClothCard;