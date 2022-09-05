import React from 'react'
import { WISHLIST, CART, MAIN } from '../constants/constants';
import HeaderLink from './HeaderLink';

function Header(props) {
  return (
    <header className="flex flex-col items-center justify-between md:flex-row p-3">
      <span>Logo</span>
      <div className="flex flex-row gap-3">
        <HeaderLink text={ 'Main' } to="/" />
        <HeaderLink text={ WISHLIST } className="" to="/wishlist"/>
        <HeaderLink text={ CART } />
      </div>
    </header>
  );
}
export default Header;