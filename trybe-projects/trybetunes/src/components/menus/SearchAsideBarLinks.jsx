import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import HomeSVG from '../svgs/HomeSVG';
import UserSVG from '../svgs/UserSVG';
import StarSVG from '../svgs/StarSVG';
import LogoutSVG from '../svgs/LogoutSVG';
import SongsContext from '../../context/SongsContext';
import { ENTER, FLEX, NONE } from '../../constants/strings';
import MagnifyingGlassSVG from '../svgs/MagnifyingGlassSVG';
import HamburguerSVG from '../svgs/HamburguerSVG';

function SearchAsideBarLinks(props) {
  const contextValue = useContext(SongsContext)
  const {
    searched: { setRecentlySearchedArtists, setSearchedArtist },
    listened: { setRecentlyListenedSongs },
    favorites: { setFavoriteSongs },
    user: {
      setUserName,
      setUserEmail,
      setUserDescription,
      setUserImage,
    }
  } = contextValue

  const [searchedArtistInput, setSearchedArtistInput] = useState('')
  const [isSearchedArtistInputVisible, setIsSearchedArtistInputVisible] = useState(true)
  const [isSearchMessageVisible, setIsSearchMessageVisible] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [isDisplayMenuLinkHidden, setIsDisplayMenuLinkHidden] = useState(true)

  const SMALL_SCREEN = 640
  const MEDIUM_SCREEN = 768

  const navigate = useNavigate()

  const onEnterKeyDownSearchArtist = async ({ key }) => {
    if (key === ENTER) {
      setSearchedArtist(searchedArtistInput)
      navigate('/search')
    }
  }


  const clearRecentlySearchedArtists = () => setRecentlySearchedArtists([])
  const clearRecentlyListenedSongs = () => setRecentlyListenedSongs([])
  const clearFavoriteSongs = () => setFavoriteSongs([])
  const clearUserContextInfos = () => {
    setUserName('')
    setUserEmail('')
    setUserDescription('')
    setUserImage('')
  }
  const clearLastSearchedArtist = () => setSearchedArtist('')

  const handleClickLogout = () => {
    clearRecentlySearchedArtists()
    clearRecentlyListenedSongs()
    clearFavoriteSongs()
    clearUserContextInfos()
    clearLastSearchedArtist()
  }

  const handleOnClickHamburguer = () => {
    setIsDisplayMenuLinkHidden(!isDisplayMenuLinkHidden)
  }

  const handleOnClickOpenSearchInput = () => {
    if (windowSize >= 768) return;
    setIsSearchedArtistInputVisible(!isSearchedArtistInputVisible);
    setIsSearchMessageVisible(!isSearchMessageVisible);
  }

  const handleWindowResize = useCallback(() => {
    setWindowSize(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [handleWindowResize])

  useEffect(() => {
    const onChangeWindowSizeSetSearchInputDisplay = () => {
      if (windowSize < MEDIUM_SCREEN) setIsSearchedArtistInputVisible(false)
      if (windowSize >= MEDIUM_SCREEN) setIsSearchedArtistInputVisible(true)
    }
    onChangeWindowSizeSetSearchInputDisplay()
  }, [windowSize])

  useEffect(() => {
    const onChangeWindowSizeSetSearchMessageDisplay = () => {
      if (windowSize < MEDIUM_SCREEN) setIsSearchMessageVisible(true)
      if (windowSize >= MEDIUM_SCREEN) setIsSearchMessageVisible(false)
    }
    onChangeWindowSizeSetSearchMessageDisplay()
  }, [windowSize])

  useEffect(() => {
    const onChangeWindowSizeSetMenuLinkDisplay = () => {
      if (windowSize < SMALL_SCREEN) setIsDisplayMenuLinkHidden(true)
      if (windowSize >= SMALL_SCREEN) setIsDisplayMenuLinkHidden(false)
    }
    onChangeWindowSizeSetMenuLinkDisplay()
  }, [windowSize])

  return (
    <div className="pb-3 flex flex-col gap-3 justify-center items-start w-full sm:gap-1 
      sm:grid sm:grid-cols-5 md:pb-3
      md:flex md:flex-col md:gap-3">
        <div
          className="flex flex-row items-end justify-start gap-1 group sm:hidden"
          onClick={ handleOnClickHamburguer }
        >
          <HamburguerSVG
            className="shrink-0 w-7 h-7 stroke-white stroke-2 
              opacity-50 group-hover:opacity-100 transition duration-500"
          />
          <span className="text-white font-semibold opacity-50
              group-hover:opacity-100 transition duration-500">
            Menu
          </span>
        </div>
        <label
          htmlFor=""
          className="group hidden gap-1 sm:flex sm:flex-row sm:gap-2 sm:items-center md:gap-2 md:mb-4"
          style={{ display: isDisplayMenuLinkHidden ? NONE : FLEX }}
        >
          <MagnifyingGlassSVG
            className="shrink-0 z-20 stroke-2 opacity-50 stroke-white fill-black
              md:opacity-100 md:fill-white md:stroke-black md:absolute md:z-[1] md:left-6"
            onClick={ handleOnClickOpenSearchInput }
          />
          <span
            className="block text-white font-semibold opacity-50
              group-hover:opacity-100 transition duration-500 md:hidden"
            onClick={ handleOnClickOpenSearchInput }
          >
            Search
          </span>
        
          <input
              type="text"
              value={ searchedArtistInput }
              placeholder="Search by artist name"
              onChange={ ({ target: { value }}) => setSearchedArtistInput(value) }
              onKeyDown={ onEnterKeyDownSearchArtist }
              className="translate-x-[6rem] translate-y-[-0.5rem] sm:translate-x-0 sm:translate-y-[2.5rem] left-1 z-10 absolute
                rounded-full p-3 indent-7 w-fit focus:outline-none
                md:translate-y-0 md:z-0 md:relative"
              style={{ display: isSearchedArtistInputVisible ? '' : NONE }}
            />
         
        </label>
      
      
      <Link
        to="/search"
        className="group hidden gap-1 sm:flex sm:flex-row sm:gap-2 sm:items-center"
        style={{ display: isDisplayMenuLinkHidden ? NONE : FLEX }}
      >
        <HomeSVG className="shrink-0 w-7 h-7 stroke-white stroke-2 opacity-50
          group-hover:opacity-100 transition duration-500"/>
        <span className="text-white font-semibold opacity-50
          group-hover:opacity-100 transition duration-500">
          Home
        </span>
      </Link>

      <Link
        to="/profile"
        className="group hidden gap-1 sm:flex sm:flex-row sm:gap-2 sm:items-center"
        style={{ display: isDisplayMenuLinkHidden ? NONE : FLEX }}
        >
        <UserSVG className="shrink-0 w-7 h-7 stroke-white stroke-2 opacity-50
          group-hover:opacity-100 transition duration-500"/>
        <span className="text-white font-semibold opacity-50
          group-hover:opacity-100 transition duration-500">
          Profile
        </span>
      </Link>

      <Link
        to="/favorites"
        className="group hidden gap-1 sm:flex sm:flex-row sm:gap-2 sm:items-center"
        style={{ display: isDisplayMenuLinkHidden ? NONE : FLEX }}
        >
        <StarSVG className="shrink-0 w-7 h-7 stroke-white stroke-2 opacity-50
          group-hover:opacity-100 group-hover:fill-yellow-600 group-hover:stroke-yellow-600 transition duration-500"/>
        <span className="text-white font-semibold opacity-50
          group-hover:opacity-100 transition duration-500">
          Favorites
        </span>
      </Link>

      <Link
        to="/"
        className="group hidden gap-1 sm:flex sm:flex-row sm:gap-2 sm:items-center"
        style={{ display: isDisplayMenuLinkHidden ? NONE : FLEX }}
        onClick={ handleClickLogout }
      >
        <LogoutSVG className="shrink-0 w-7 h-7 stroke-white stroke-2 opacity-50
          group-hover:opacity-100 group-hover:fill-[#aa1010] transition duration-500"/>
        <span className="text-white font-semibold opacity-50
          group-hover:opacity-100 transition duration-500">
          Logout
        </span>
      </Link>
    </div>
  );
}
export default SearchAsideBarLinks;