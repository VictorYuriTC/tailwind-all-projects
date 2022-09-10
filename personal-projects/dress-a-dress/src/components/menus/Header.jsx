import React, { useContext, useEffect, useState } from 'react'
import { CART_CLOTHES } from '../../constants/constants';
import { getItemFromLocalStorage } from '../../local_storage/localStorage';
import BagSVG from '../svgs/BagSVG';
import HeartSVG from '../svgs/HeartSVG';
import UserSVG from '../svgs/UserSVG';
import UnderlinedHeaderLinkCard from '../cards/UnderlinedHeaderLinkCard';
import MagnifyingGlassSVG from '../svgs/MagnifyingClassSVG';
import ClothesContext from '../../context/ClothesContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HM_PNG from '../../assets/images/photos/hm.png'

function Header() {
  const contextValue = useContext(ClothesContext);
  const {
    search: { setSearchedProductInput },
    cart: { amountOfCartItems, setAmountOfCarItems }
  } = contextValue;
  const navigate = useNavigate();
  const { pathname } = useLocation();

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

  useEffect(() => {
    console.log(pathname)
  }, [])

  return (
    <div className="flex flex-col justify-end pl-7 pr-7 pb-4 pt-5 lg:pt-9">
      <header className="flex flex-row self-end gap-5 lg:gap-2">
          <Link
            to="/login"
            className="flex flex-row items-center gap-1"
          >
            <UserSVG className="stroke-1"/>
            <span className="hidden text-sm lg:inline">
              Sign in
            </span>
          </Link>

          <Link
            to="/wishlist"
            className="flex flex-row items-center gap-1"
            >
            <HeartSVG className="stroke-1"/>
            <span className="hidden text-sm lg:inline">
              Favorites
            </span>
          </Link>

          <Link
            to="/cart"
            className="flex flex-row items-center gap-1"
          >
            <BagSVG className="stroke-black stroke-1"/>
            <span className="hidden text-sm lg:inline">
              Shopping bag <span className="font-medium">({ amountOfCartItems })</span>
            </span>
          </Link>
      </header>

      <header className="relative flex flex-row items-center justify-center
        pb-[2rem] translate-y-[-7px]">
        <Link
          to="/"
          className="hover:scale-[1.1] transition duration-500 relative pb-[1.9rem] pr-[4.3rem]">
              <img
                src={ HM_PNG }
                alt="H&M official logo"
                className="absolute object-cover"
              />
        </Link>
      </header>

      <header className="hidden lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-5">
        <div className="flex flex-row gap-[1.5rem] justify-end">
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

      <header className="hidden lg:flex lg:flex-col justify-center 
        lg:self-end lg:translate-y-[-2em] pl-2
        lg:w-32 xl:w-40 pb-1">
        <div className="flex flex-row items-center border-b border-black pb-2 gap-2">
          <MagnifyingGlassSVG className="absolute stroke-1"/>
          <input
            type="text"
            placeholder="Search products"
            className="flex flex-row
              focus:outline-none lg:indent-6 xl:indent-8
              text-center placeholder-black text-sm placeholder:text-start placeholder:text-xs
              bg-main-bg max-w-full"
            onKeyDown={ onEnterKeyDownSearchProducts }
          />
        </div>
      </header>

      <header className="block pb-7">
        <h1 className="text-2xs font-base text-center">
          <Link to="/" className="hover:text-red-600">
            <span>HM.com</span> 
          </Link>
          <span>
          <Link to={`${pathname}`} className="hover:text-red-600">
            <span>
            {`${
              pathname.slice(0, 2).toUpperCase()}${
              pathname.slice(2, pathname.length)}`
            }
            </span>
          </Link>
          </span>
        </h1>
      </header>
    </div>
  );
}
export default Header;