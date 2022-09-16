import React, { useContext, useState } from 'react'
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

  const onEnterKeyDownSearchArtist = async ({ key }) => {
    if (key === ENTER) setSearchedArtist(searchedArtistInput)
  }
  const clearRecentlySearchedArtists = () => setRecentlySearchedArtists([])
  const clearRecentlyListenedSongs = () => setRecentlyListenedSongs([])
  const clearFavoriteSongs = () => setFavoriteSongs([])


  const handleOnClickLogout = () => {
    clearRecentlySearchedArtists()
    clearRecentlyListenedSongs()
    clearFavoriteSongs()
  }

  return (
    <div className="flex flex-col items-start gap-3 max-h-sm">
      <div className="">
        <label
          htmlFor=""
          className="relative flex flex-row items-center justify-center gap-2 w-fit"
        >
          <MagnifyingGlassSVG
            className="stroke-2 opacity-50 stroke-white fill-black
              sm:opacity-100 sm:fill-white sm:stroke-black sm:absolute sm:left-3
            "/>
          <span className="text-white font-semibold opacity-50
          group-hover:opacity-100 transition duration-500 sm:hidden">
            Search
          </span>
            <input
              type="text"
              value={ searchedArtistInput }
              placeholder="Search by artist name"
              onChange={ ({ target: { value }}) => setSearchedArtistInput(value) }
              onKeyDown={ onEnterKeyDownSearchArtist }
              className="hidden rounded-full p-3 indent-7 w-fit focus:outline-none sm:block"
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
        onClick={ handleOnClickLogout }
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