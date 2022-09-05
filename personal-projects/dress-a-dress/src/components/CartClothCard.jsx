import React, { useEffect, useState } from 'react'
import AddToFavoriteHeartSVG from './svgs/AddToFavoriteHeartSVG';
import TrashSVG from './svgs/TrashSVG';
import { setItemInLocalStorage, getItemFromLocalStorage } from '../localStorage/localStorage';
import { CART_CLOTHES, FAVORITE_CLOTHES } from '../constants/constants';
import CartPieceOption from './CartPieceOption';

function CartClothCard({ cloth, size, color, className }) {
  const [selectAmountOfPieces, setSelectAmountOfPieces] = useState(1);
  const [clothNumericalPrice, setClothNumericalPrice] = useState(0);
  const [clothCurrencySymbol, setClothCurrencySymbol] = useState('$');
  const [maxAmountOfPieces, setMaxAmountOfPieces] = useState([]);

  const {
    articleCode,
    price,
    title
  } = cloth;

  const onCLickAddToCart = () => {
    const cartClothes = getItemFromLocalStorage(CART_CLOTHES);
    const favoriteClothes = getItemFromLocalStorage(FAVORITE_CLOTHES);

    setItemInLocalStorage(CART_CLOTHES, [...cartClothes, articleCode]);

    const favoriteClothesAfterDeletion = favoriteClothes
      .filter(favoriteCode => favoriteCode !== articleCode)
    
    setItemInLocalStorage(FAVORITE_CLOTHES, favoriteClothesAfterDeletion);
  }

  useEffect(() => {
    console.log(cloth)
  }, [])

  useEffect(() => {
    const getNumericalPriceAndCurrencySymbol = () => {
      const priceWithoutSymbol = price.replace(/[^\w,]/g, '').replace(',', '.');
      const currencySymbol = price.charAt(price.length - 1);
      setClothNumericalPrice(priceWithoutSymbol);
      setClothCurrencySymbol(currencySymbol);
    }

    getNumericalPriceAndCurrencySymbol();
  }, [])


  return (
    <div className="flex flex-row mt-10">
      <img
        src={cloth.image[0].dataAltImage}
        alt={cloth.image[0].alt}
        className={`${className} w-32 h-48`}
      />

      <div className="flex flex-col p-5">
        <div className="flex flex-row gap-20 justify-between">
          <h1>{ title }</h1>
          <TrashSVG className=""/>
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
          <h3>{ Number(selectAmountOfPieces) * clothNumericalPrice }{ clothCurrencySymbol }</h3>
          <p>{ price }</p>
        </div>

        <div className="flex flex-row gap-3">
          <div className="border border-black w-fit pl-5 pr-5 pt-3 pb-3">
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