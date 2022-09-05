import React, { useEffect, useState } from 'react'
import { BAG_SVG } from '../assets/images/svgs/miscellaneous/svgs';
import { CART_CLOTHES } from '../constants/constants';
import { getItemFromLocalStorage } from '../localStorage/localStorage';
import HeaderLink from './HeaderLink';

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
      <span>Logo</span>
      <HeaderLink
        text={ 'Main' }
        to="/"
        className="text-center"/>
      <div className="flex flex-row gap-4">
        <HeaderLink
          text={ 'Sign in' }
          to="/login"
          className="text-bases"
        />   
        <HeaderLink
          text={ 'Favorites' }
          to="/wishlist"
          className="text-base"/>
        <HeaderLink
          text={ `Shopping bag (${amountOfCartItems})` }
          to="/cart"
          className="text-base"
        />
      </div>
    </header>
  );
}
export default Header;