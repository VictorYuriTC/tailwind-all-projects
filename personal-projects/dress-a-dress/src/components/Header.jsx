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
    <div className="flex flex-col">
      <header className="flex p-0 items-center justify-center lg:justify-end md:flex-row md:p-3">
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
        <span className="text-2xl font-black text-[#d93333]">
          H&M
        </span>
      </div>

      <header className="hidden lg:flex lg:flex-row items-center lg:justify-center lg:gap-5 lg:mb-5 lg:mt-5">
        <UnderlinedHeaderLink text="Women" to="/women" classNameDiv=""/>
        <UnderlinedHeaderLink text="Divided" to="/divided" classNameDiv=""/>
        <UnderlinedHeaderLink text="Men" to="/men" classNameDiv=""/>
        <UnderlinedHeaderLink text="Baby" to="/baby" classNameDiv=""/>
        <UnderlinedHeaderLink text="Kids" to="/kids" classNameDiv=""/>
        <UnderlinedHeaderLink text="H&M HOME" to="/" classNameDiv=""/>
        <UnderlinedHeaderLink text="Sport" to="/sport" classNameDiv=""/>
        <UnderlinedHeaderLink text="Sale" to="/sale" classNameDiv=""/>
        <UnderlinedHeaderLink text="Sustainability" to="/sustainability" 
            classNameDiv=""/>
        <div className="self-end">
          <MagnifyingGlassSVG className="absolute"/>
          <input
            type="text"
            placeholder="Search products"
            className="font-black text-center w-4 lg:w-40 xl:w-44 
              2xl:w-52 p-1 focus:outline-none indent-4 bg-main-bg"
            onKeyDown={ onEnterKeyDownSearchProducts }
          />
          <div className="border border-black"/>
        </div>
      </header>
    </div>
  );
}
export default Header;