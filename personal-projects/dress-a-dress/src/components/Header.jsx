import React from 'react'
import { WISHLIST, CART } from '../constants/constants';
import HeaderButton from './HeaderButton';

function Header(props) {
  return (
    <header className="flex flex-col items-center justify-between md:flex-row p-3">
      <span>Logo</span>
      <div className="flex flex-row gap-3">
        <HeaderButton text={ WISHLIST } className=""/>
        <HeaderButton text={ CART } />
      </div>
    </header>
  );
}
export default Header;