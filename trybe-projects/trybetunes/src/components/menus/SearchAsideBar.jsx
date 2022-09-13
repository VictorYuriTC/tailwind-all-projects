import React, { useContext } from 'react'
import MagnifyingGlassSVG from '../svgs/MagnifyingGlassSVG';
import SongsContext from '../../context/SongsContext';
import { ENTER } from '../../constants/strings';
import { Link } from 'react-router-dom';
import HomeSVG from '../svgs/HomeSVG';
import UserSVG from '../svgs/UserSVG';
import StarSVG from '../svgs/StarSVG';

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
    <aside className="flex flex-col gap-5 w-2/5 left-0">
      <div className="flex flex-col items-start">
        <Link
          to="/search"
          className="flex gap-2 group"
        >
          <HomeSVG className="stroke-white stroke-2 opacity-50
            group-hover:opacity-100 transition duration-500"/>
          <span className="text-white font-semibold opacity-50
            group-hover:opacity-100 transition duration-500">
            Home
          </span>
        </Link>
        <Link
          to="/profile"
          className="flex gap-2 group"
          >
          <UserSVG className="stroke-white stroke-2 opacity-50
            group-hover:opacity-100 transition duration-500"/>
          <span className="text-white font-semibold opacity-50
            group-hover:opacity-100 transition duration-500">
            Profile
          </span>
        </Link>
        <Link
          to="/favorites"
          className="flex gap-2 group"
          >
          <StarSVG className="stroke-white stroke-2 opacity-50
            group-hover:opacity-100 transition duration-500"/>
          <span className="text-white font-semibold opacity-50
            group-hover:opacity-100 transition duration-500">
            Favorites
          </span>
        </Link>
      </div>
      <div>
        <label
          htmlFor=""
          className="flex flex-row items-center justify-center gap-2 w-fit"
        >
          <MagnifyingGlassSVG
            className="absolute fill-white left-4"/>
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

      <div className="flex flex-col items-start">
        <h1 className="text-lg font-black text-white">
          Recently searched
        </h1>
        <div className="flex flex-col items-start gap">
          { recentlySearchedArtists.map(({ artistName }) => (
            <div className="flex flex-col items-start">
              <span className="text-white">
                <span className="">{ artistName }</span>
              </span>
            </div>))
          }
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div>
          <h1 className="text-lg font-bold text-white">
            Recently listened
          </h1>
        </div>

        <div className="flex flex-col items-start gap-2">
          { recentlyListenedSongs.map(({ trackName, trackId, artistName }) => (
            <div className="flex flex-col items-start">
              <span
                key={ trackId }
                className="text-white"
              >
                { trackName }
              </span>
              <span className="text-white">
                by <span className="">{ artistName }</span>
              </span>
            </div>))
          }
        </div>
      </div>
    </aside>
  );
}
export default SearchAsideBar;