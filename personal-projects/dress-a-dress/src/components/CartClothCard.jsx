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
    <div className="flex flex-row mt-10 bg-main-bg ml-36">
      <img
        src={cloth.image[0].dataAltImage}
        alt={cloth.image[0].alt}
        className={`${className} w-32 h-48`}
      />

      <div className="flex flex-col p-5">
        <div className="flex flex-row gap-20 justify-between">
          <h1>{ title }</h1>
          <TrashSVG
            onClick={ onClickRemoveFromShoppingBag }
            className="hover:opacity-60 hover:cursor-pointer"
          />
        </div>

        <h3>{ price }</h3>

        <div className="flex flex-row gap-20 pt-2 font-light">
          <h3>Art. no.</h3>
          <h3>{ articleCode }</h3>
          <h3>Size: </h3>
          <h3>{ size = 0 }</h3>
        </div>

        <div className="flex flex-row gap-20 pb-2 font-light">
          <h3>Color:</h3>
          <h3>{ color = 'randomColor' }</h3>
          <h3>Total: </h3>
          <h3>{ total }</h3>
        </div>

        <div className="flex flex-row gap-3">
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