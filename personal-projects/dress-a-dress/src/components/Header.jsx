import React, { useContext, useEffect, useMemo, useState } from 'react'
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
  const [amountOfCartItems, setAmountOfCarItems] = useState(0);
  const contextValue = useContext(ClothesContext);
  const { search: { setSearchedProductInput }} = contextValue;
  const navigate = useNavigate();

  useEffect(() => {
    if (getItemFromLocalStorage(CART_CLOTHES)) {
      setAmountOfCarItems(getItemFromLocalStorage(CART_CLOTHES).length)
    }
  }, [])

  const onEnterKeyDownSearchProducts = ({ key, target: { value }}) => {
    const pressedKey = key;
    if (pressedKey !== 'Enter') return;

    setSearchedProductInput({ pressedKey, value: value.toLowerCase() });
    navigate('/')
  }

  return (
    <div className="">
      <header className="flex flex-col p-0 items-center justify-end md:flex-row md:p-3 self-end">
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

      <header className="flex items-center justify-center 3xsm:hidden 2xsm:hidden xsm:hidden sm:flex-col md:flex-row">
        <div className="grid grid-cols-5 sm:flex sm:flex-row sm:items-center justify-end">
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

        <div className="group flex flex-col p-1 justify-center md:p-4">
          <MagnifyingGlassSVG className="absolute"/>
          <input
            type="text"
            placeholder="Search products"
            className="font-black text-center w-4 2xsm:w-8 xsm:w-16 sm:w-40 md:w-24 lg:w-40 xl:w-44 2xl:w-52 p-1 focus:outline-none indent-4 bg-main-bg"
            onKeyDown={ onEnterKeyDownSearchProducts }
          />
          <div className="border border-black"></div>
        </div>
      </header>
    </div>
  );
}
export default Header;