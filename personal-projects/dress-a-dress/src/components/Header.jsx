import React, { useEffect, useState } from 'react'
import { BAG_SVG } from '../assets/images/svgs/miscellaneous/svgs';
import { CART_CLOTHES } from '../constants/constants';
import { getItemFromLocalStorage } from '../localStorage/localStorage';
import HeaderLink from './HeaderLink';
import BagSVG from './svgs/BagSVG';
import AddToFavoriteHeartSVG from './svgs/AddToFavoriteHeartSVG';
import HeartSVG from './svgs/HeartSVG';
import UserSVG from './svgs/UserSVG';

function Header(props) {
  const [amountOfCartItems, setAmountOfCarItems] = useState(0);

  useEffect(() => {
    const getAmountOfCarItems = () => {
      const cartItems = getItemFromLocalStorage(CART_CLOTHES);
      setAmountOfCarItems(cartItems.length)
    }

    getAmountOfCarItems();
  }, [])

  return (
    <header className="flex flex-col items-center flex-nowrap justify-between md:flex-row p-3">
      <span>{ BAG_SVG }</span>
      <div>
        <HeaderLink
          text={ 'Main' }
          to="/"
          className="text-center font-black"
        />
      </div>

      <div className="flex flex-row gap-3">
        <div className="flex flex-row items-center">
          <UserSVG />
          <HeaderLink
            text={ 'Sign in' }
            to="/login"
            className="text-base"
          />  
        </div>

        <div className="flex flex-row items-center">
          <HeartSVG className=""/>
          <HeaderLink
            text={ 'Favorites' }
            to="/wishlist"
            className="text-base"
          />
        </div>

        <div className="flex flex-row items-center">
          <BagSVG
            className="stroke-black"
          />
          <HeaderLink
            text={ `Shopping bag (${amountOfCartItems})` }
            to="/cart"
            className="text-base"
          />
        </div>

      </div>
    </header>
  );
}
export default Header;