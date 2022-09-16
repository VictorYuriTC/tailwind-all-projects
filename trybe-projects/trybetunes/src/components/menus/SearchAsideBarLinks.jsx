import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HomeSVG from '../svgs/HomeSVG';
import UserSVG from '../svgs/UserSVG';
import StarSVG from '../svgs/StarSVG';
import LogoutSVG from '../svgs/LogoutSVG';
import SongsContext from '../../context/SongsContext';
import { ENTER } from '../../constants/strings';
import MagnifyingGlassSVG from '../svgs/MagnifyingGlassSVG';

function SearchAsideBarLinks(props) {
  const contextValue = useContext(SongsContext);
  const {
    searched: { setRecentlySearchedArtists, setSearchedArtist },
    listened: { setRecentlyListenedSongs },
    favorites: { setFavoriteSongs },
  } = contextValue;

  const [searchedArtistInput, setSearchedArtistInput] = useState('');
  const [isSearchedArtistInputVisible, setIsSearchedArtistInputVisible] = useState(true);
  const [isSearchMessageVisible, setIsSearchMessageVisible] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const onEnterKeyDownSearchArtist = async ({ key }) => {
    if (key === ENTER) setSearchedArtist(searchedArtistInput)
  }
  const clearRecentlySearchedArtists = () => setRecentlySearchedArtists([])
  const clearRecentlyListenedSongs = () => setRecentlyListenedSongs([])
  const clearFavoriteSongs = () => setFavoriteSongs([])


  const handleClickLogout = () => {
    clearRecentlySearchedArtists()
    clearRecentlyListenedSongs()
    clearFavoriteSongs()
  }

  const handleOnClickMagnifyingGlass = () => {
    if (windowSize >= 640) return;
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
    if (windowSize < 640) {
      setIsSearchMessageVisible(true);
      setIsSearchedArtistInputVisible(false);
    }
    
    if (windowSize >= 640) {
      setIsSearchedArtistInputVisible(true)
      setIsSearchMessageVisible(false);
    }
  }, [windowSize])

  return (
    <div className="flex flex-col items-start gap-3 max-h-sm">
      <div className="">
        <label
          htmlFor=""
          className="relative flex flex-row items-center justify-center gap-2 w-fit"
        >
          <MagnifyingGlassSVG
            className="stroke-2 opacity-50 stroke-white fill-black
              sm:opacity-100 sm:fill-white sm:stroke-black sm:absolute sm:left-3" 
            onClick={ handleOnClickMagnifyingGlass }
          />
          <span
            className="block text-white font-semibold opacity-50
              group-hover:opacity-100 transition duration-500 sm:hidden"
            style={{ display: isSearchMessageVisible ? '' : 'none' }}
          >
            Search
          </span>
          <input
            type="text"
            value={ searchedArtistInput }
            placeholder="Search by artist name"
            onChange={ ({ target: { value }}) => setSearchedArtistInput(value) }
            onKeyDown={ onEnterKeyDownSearchArtist }
            className="rounded-full p-3 indent-7 w-fit focus:outline-none"
            style={{ display: isSearchedArtistInputVisible ? '' : 'none' }}
          />
        </label>
      </div>
      <Link
        to="/search"
        className="flex items-center gap-2 group"
      >
        <HomeSVG className="w-7 h-7 stroke-white stroke-2 opacity-50
          group-hover:opacity-100 transition duration-500"/>
        <span className="text-white font-semibold opacity-50
          group-hover:opacity-100 transition duration-500">
          Home
        </span>
      </Link>

      <Link
        to="/profile"
        className="flex items-center gap-2 group"
        >
        <UserSVG className="w-7 h-7 stroke-white stroke-2 opacity-50
          group-hover:opacity-100 transition duration-500"/>
        <span className="text-white font-semibold opacity-50
          group-hover:opacity-100 transition duration-500">
          Profile
        </span>
      </Link>

      <Link
        to="/favorites"
        className="flex items-center gap-2 group"
        >
        <StarSVG className="w-7 h-7 stroke-white stroke-2 opacity-50
          group-hover:opacity-100 group-hover:fill-yellow-600 group-hover:stroke-yellow-600 transition duration-500"/>
        <span className="text-white font-semibold opacity-50
          group-hover:opacity-100 transition duration-500">
          Favorites
        </span>
      </Link>

      <Link
        to="/"
        className="flex items-center gap-2 group"
        onClick={ handleClickLogout }
      >
        <LogoutSVG className="w-7 h-7 stroke-white stroke-2 opacity-50
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