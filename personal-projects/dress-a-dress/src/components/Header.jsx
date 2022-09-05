import React, { useContext, useEffect, useState } from 'react'
import { CART_CLOTHES } from '../constants/constants';
import { getItemFromLocalStorage } from '../localStorage/localStorage';
import HeaderLink from './HeaderLink';
import BagSVG from './svgs/BagSVG';
import HeartSVG from './svgs/HeartSVG';
import UserSVG from './svgs/UserSVG';
/* import HomeSVG from './svgs/HomeSVG'; */
import UnderlinedHeaderLink from './UnderlinedHeaderLink';
import MagnifyingGlassSVG from './svgs/MagnifyingClassSVG';
import ClothesContext from '../context/ClothesContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [amountOfCartItems, setAmountOfCarItems] = useState(getItemFromLocalStorage(CART_CLOTHES)
    .length);
  const contextValue = useContext(ClothesContext);
  const { search: { setSearchedProductInput }} = contextValue;
  const navigate = useNavigate();

  const onEnterKeyDownSearchProducts = ({ key, target: { value }}) => {
    const pressedKey = key;
    if (pressedKey !== 'Enter') return;

    setSearchedProductInput({ pressedKey, value: value.toLowerCase() });
    navigate('/')
  }

  return (
    <div className="">
      <header className="flex flex-col items-center flex-nowrap justify-end md:flex-row p-3 self-end">
        <div className="flex flex-row gap-3">
{/*           <div className="flex flex-row items-center">
            <HomeSVG />
            <HeaderLink
              text={ 'Home'}
              to="/"
              className="text-base"
            />
          </div> */}

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

      <div className="flex flex-row items-center justify-center">
        <span className="text-2xl font-extrabold text-[#d93333]">
          H&M
        </span>
      </div>

      <header className="flex flex-row items-center justify-end">
        <div className="flex flex-row md:mr-28">
          <UnderlinedHeaderLink text="Women" to="/women" className=""/>
          <UnderlinedHeaderLink text="Divided" to="/divided" className=""/>
          <UnderlinedHeaderLink text="Men" to="/men" className=""/>
          <UnderlinedHeaderLink text="Baby" to="/baby" className=""/>
          <UnderlinedHeaderLink text="Kids" to="/kids" className=""/>
          <UnderlinedHeaderLink text="H&M HOME" to="/" className=""/>
          <UnderlinedHeaderLink text="Sport" to="/sport" className=""/>
          <UnderlinedHeaderLink text="Sale" to="/sale" className=""/>
          <UnderlinedHeaderLink text="Sustainability" to="/sustainability" className=""/>
        </div>

        <div className="group flex flex-col justify-center p-4">
          <MagnifyingGlassSVG className="absolute"/>
          <input
            type="text"
            placeholder="Search products"
            className="font-black text-center w-40 p-1 focus:outline-none indent-4 bg-main-bg"
            onKeyDown={ onEnterKeyDownSearchProducts }
          />
          <div className="border border-black"></div>
        </div>
      </header>
    </div>
  );
}
export default Header;