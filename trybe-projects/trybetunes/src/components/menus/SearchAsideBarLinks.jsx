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

  const handleOnClickOpenSearchInput = () => {
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
    <div className="grid grid-cols-5 place-items-center pb-3 justify-center items-start gap-1 w-full
      sm:flex sm:flex-col sm:gap-3">
      
        <label
          htmlFor=""
          className="flex flex-row items-center justify-center gap-1 sm:gap-2 sm:mb-4"
        >
          <MagnifyingGlassSVG
            className="shrink-0 z-20 stroke-2 opacity-50 stroke-white fill-black
              sm:opacity-100 sm:fill-white sm:stroke-black sm:absolute sm:left-6"
              onClick={ handleOnClickOpenSearchInput }
          />
          <span
            className="block text-white font-semibold opacity-50
              group-hover:opacity-100 transition duration-500 sm:hidden"
            style={{ display: isSearchMessageVisible ? '' : 'none' }}
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
              className="translate-y-[2.5rem] translate-x-[4.5rem] z-10 absolute
                rounded-full p-3 indent-7 w-fit focus:outline-none
                sm:translate-y-0 sm:translate-x-0 sm:z-0 sm:relative"
              style={{ display: isSearchedArtistInputVisible ? '' : 'none' }}
            />
         
        </label>
      
      
      <Link
        to="/search"
        className="flex items-center gap-1 sm:gap-2 group"
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
        className="flex items-center gap-1 sm:gap-2 group"
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
        className="flex items-center gap-1 sm:gap-2 group"
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
        className="flex items-center gap-1 sm:gap-2 group"
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