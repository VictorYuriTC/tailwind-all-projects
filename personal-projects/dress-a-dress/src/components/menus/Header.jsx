import React, { useContext, useEffect, useState } from 'react'
import { CART_CLOTHES } from '../../constants/constants';
import { getItemFromLocalStorage } from '../../local_storage/localStorage';
import BagSVG from '../svgs/BagSVG';
import HeartSVG from '../svgs/HeartSVG';
import UserSVG from '../svgs/UserSVG';
import UnderlinedHeaderLinkCard from '../cards/UnderlinedHeaderLinkCard';
import MagnifyingGlassSVG from '../svgs/MagnifyingClassSVG';
import ClothesContext from '../../context/ClothesContext';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const contextValue = useContext(ClothesContext);
  const {
    search: { setSearchedProductInput },
    cart: { amountOfCartItems, setAmountOfCarItems }
  } = contextValue;
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
    <div className="flex flex-col pr-8 pb-4 pt-10 gap-1">
      <header className="flex flex-row place-self-center lg:place-self-end">
        <div className="flex flex-row gap-3">
          <Link
            to="/login"
            className="5xsm:hidden 4xsm:hidden flex flex-row items-center gap-1"
          >
            <UserSVG className="stroke-1"/>
            <span className="text-sm font-light">
              Sign in
            </span>
          </Link>

          <Link
            to="/wishlist"
            className="5xsm:hidden 4xsm:hidden 3xsm:hidden 2xsm:hidden flex flex-row
              items-center gap-1"
            >
            <HeartSVG className="stroke-1"/>
            <span className="text-sm font-light">
              Favorites
            </span>
          </Link>


          <Link
            to="/cart"
            className="5xsm:hidden flex flex-row items-center gap-1"
          >
            <BagSVG className="stroke-black stroke-1"/>
            <span className="text-sm font-light">
              Shopping bag <span className="font-medium">({ amountOfCartItems })</span>
            </span>
          </Link>
        </div>
      </header>

      <div className="flex flex-row items-center justify-center">
        <Link
          to="/"
          className="hover:scale-[1.1] transition duration-500 text-3xl font-black text-[#d93333]">
          H&M
        </Link>
      </div>

      <header className="hidden lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-5 lg:pb-5 lg:pt-5">
        <div className="flex flex-row gap-5 justify-end">
          <UnderlinedHeaderLinkCard text="Women" to="/women" classNameDiv=""/>
          <UnderlinedHeaderLinkCard text="Divided" to="/divided" classNameDiv=""/>
          <UnderlinedHeaderLinkCard text="Men" to="/men" classNameDiv=""/>
          <UnderlinedHeaderLinkCard text="Baby" to="/baby" classNameDiv=""/>
          <UnderlinedHeaderLinkCard text="Kids" to="/kids" classNameDiv=""/>
          <UnderlinedHeaderLinkCard text="H&M HOME" to="/" classNameDiv=""/>
          <UnderlinedHeaderLinkCard text="Sport" to="/sport" classNameDiv=""/>
          <UnderlinedHeaderLinkCard text="Sale" to="/sale" classNameDiv=""/>
          <UnderlinedHeaderLinkCard text="Sustainability" to="/sustainability" 
              classNameDiv=""/>
        </div>
      </header>

      <header className="flex flex-col self-end translate-y-[-5rem]">
        <MagnifyingGlassSVG className="absolute"/>
        <input
          type="text"
          placeholder="Search products"
          className="flex flex-row font-black text-center w-4 lg:w-40 xl:w-44 
            2xl:w-52 p-1 focus:outline-none indent-4 bg-main-bg self-end justify-self-end"
          onKeyDown={ onEnterKeyDownSearchProducts }
        />
        <div className="border border-black"/>
      </header>
    </div>
  );
}
export default Header;