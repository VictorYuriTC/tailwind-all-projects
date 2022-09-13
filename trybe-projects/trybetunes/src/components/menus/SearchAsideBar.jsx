import React, { useContext } from 'react'
import MagnifyingGlassSVG from '../svgs/MagnifyingGlassSVG';
import SongsContext from '../../context/SongsContext';
import { ENTER } from '../../constants/strings';
import { Link } from 'react-router-dom';
import HomeSVG from '../svgs/HomeSVG';
import UserSVG from '../svgs/UserSVG';
import StarSVG from '../svgs/StarSVG';
import SearchAsideBarLinks from './SearchAsideBarLinks';

function SearchAsideBar(props) {
  const contextValue = useContext(SongsContext);
  const {
    listened: { recentlyListenedSongs },
    searched: { recentlySearchedArtists, searchedArtist, setSearchedArtist }
  } = contextValue;

  const onEnterKeyDownSearchArtist = async ({ key, target: { value }}) => {
    if (key === ENTER) setSearchedArtist(value)
  }
  
  return (
    <aside className="flex flex-col gap-5 left-0 p-2 border-[#ffffff] border-r-2 border-opacity-50">
      <div>
        <label
          htmlFor=""
          className="flex flex-row items-center justify-center gap-2 w-fit"
        >
          <MagnifyingGlassSVG
            className="absolute fill-white left-8"/>
            <input
              type="text"
              value={ searchedArtist }
              placeholder="Search by artist name"
              onChange={ ({ target: { value }}) => setSearchedArtist(value) }
              onKeyDown={ onEnterKeyDownSearchArtist }
              className="rounded-full p-3 indent-7 w-fit focus:outline-none"
            />
        </label>
      </div>

      <SearchAsideBarLinks />

      <div className="flex flex-col items-start">
        <h1 className="text-lg font-medium text-white">
          Recently searched
        </h1>
        <div className="flex flex-col items-start gap">
          { recentlySearchedArtists.map(({ artistName }) => (
            <div className="flex flex-col items-start">
              <span className="text-white opacity-50 hover:opacity-100 transition duration-300 hover:font-medium hover:cursor-pointer">
                { artistName }
              </span>
            </div>))
          }
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div>
          <h1 className="text-lg font-medium text-white">
            Recently listened
          </h1>
        </div>

        <div className="flex flex-col items-start gap-2">
          { recentlyListenedSongs.map(({ trackName, trackId, artistName }) => (
            <div className="flex flex-col items-start">
              <span
                key={ trackId }
                className="text-white opacity-50 hover:opacity-100 transition duration-300 hover:cursor-pointer"
              >
                { trackName }
              </span>
              <span className="text-white">
                <span className="opacity-50">by</span> <span className="opacity-50 hover:opacity-100 transition duration-300 hover:cursor-pointer">{ artistName }</span>
              </span>
            </div>))
          }
        </div>
      </div>
    </aside>
  );
}
export default SearchAsideBar;