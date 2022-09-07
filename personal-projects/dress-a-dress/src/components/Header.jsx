import React, { useContext, useEffect, useState } from 'react'
import { CART_CLOTHES } from '../constants/constants';
import { getItemFromLocalStorage } from '../localStorage/localStorage';
import BagSVG from './svgs/BagSVG';
import HeartSVG from './svgs/HeartSVG';
import UserSVG from './svgs/UserSVG';
import UnderlinedHeaderLink from './UnderlinedHeaderLink';
import MagnifyingGlassSVG from './svgs/MagnifyingClassSVG';
import ClothesContext from '../context/ClothesContext';
import { Link, useNavigate } from 'react-router-dom';

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
      <header className="flex flex-row justify-center p-3 gap-3 lg:justify-end">
        <div className="flex flex-row">
          <Link
            to="/login"
            className="5xsm:hidden 4xsm:hidden flex flex-row items-center mr-3 gap-1"
          >
            <UserSVG />
            <span>
              Sign in
            </span>
          </Link>

          <Link
            to="/wishlist"
            className="5xsm:hidden 4xsm:hidden 3xsm:hidden 2xsm:hidden flex flex-row items-center
            mr-3 gap-1"
            >
            <HeartSVG className=""/>
            <span>
              Favorites
            </span>
          </Link>


          <Link
            to="/cart"
            className="5xsm:hidden flex flex-row items-center gap-1"
          >
            <BagSVG className="stroke-black"/>
            <span>
              Shopping bag <span className="font-semibold">({ amountOfCartItems })</span>
            </span>
          </Link>
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