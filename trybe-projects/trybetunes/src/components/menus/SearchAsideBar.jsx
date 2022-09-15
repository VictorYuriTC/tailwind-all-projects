import React, { useContext, useState } from 'react'
import MagnifyingGlassSVG from '../svgs/MagnifyingGlassSVG';
import SongsContext from '../../context/SongsContext';
import { ENTER } from '../../constants/strings';
import SearchAsideBarLinks from './SearchAsideBarLinks';
import { Link } from 'react-router-dom';
import { removeAccents } from '../../constants/functions';

function SearchAsideBar(props) {
  const contextValue = useContext(SongsContext);
  const {
    listened: { recentlyListenedSongs },
    searched: { recentlySearchedArtists, setSearchedArtist }
  } = contextValue;

  const [searchedArtistInput, setSearchedArtistInput] = useState('');

  const onEnterKeyDownSearchArtist = async ({ key }) => {
    if (key === ENTER) setSearchedArtist(searchedArtistInput)
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
              value={ searchedArtistInput }
              placeholder="Search by artist name"
              onChange={ ({ target: { value }}) => setSearchedArtistInput(value) }
              onKeyDown={ onEnterKeyDownSearchArtist }
              className="rounded-full p-3 indent-7 w-fit focus:outline-none"
            />
        </label>
      </div>

      <SearchAsideBarLinks />

      <div className="flex flex-col items-start">
        <h1 className="text-lg font-medium text-white pb-6">
          Recently searched
        </h1>
        <div className="flex flex-col items-start gap-1">
          { recentlySearchedArtists.map(({ artistName, primaryGenreName, trackId }) => (
            <div className="flex items-start">
              <span className="">
                <span
                  key={ `searched-${ trackId }` }
                  className="text-white opacity-50 hover:opacity-100 transition duration-300 hover:font-medium hover:cursor-pointer"
                >
                  { primaryGenreName }
                </span>
                <span
                  key={ trackId }
                  className="text-white opacity-50"
                >
                  {' '}-{' '}
                </span>
                <span
                  onClick={() => setSearchedArtist(removeAccents(artistName))}
                  key={ trackId }
                  className="text-white opacity-50 hover:opacity-100 transition duration-300 hover:font-medium hover:cursor-pointer"
                >
                  { 
                    artistName.length > 25
                    ? `${ artistName.slice(0, -(artistName.length - 30)) }...`
                    : artistName
                  }
                </span>
              </span>
            </div>))
          }
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div>
          <h1 className="text-lg font-medium text-white pb-6">
            Recently listened
          </h1>
        </div>

        <div className="flex flex-col items-start gap-1">
          { recentlyListenedSongs.map(({
            trackName,
            trackId,
            artistName,
            artworkUrl100,
            collectionId
          }) => (
            <div className="grid grid-cols-3 gap-6 w-full">
              <div className="flex flex-row">
                <Link
                  key={ trackId }
                  to={`/album/${ collectionId }`}
                  className="relative pb-16 pr-16">
                  <img
                    key={ trackId }
                    src={ artworkUrl100 }
                    alt=""
                    className="absolute object-scale-down w-full h-full"/>
                </Link>
              </div>
              <div className="grid col-span-2">
                <span
                  key={ trackId }
                  className="text-white opacity-50 hover:opacity-100 transition duration-300 hover:cursor-pointer"
                >
                  { trackName }
                </span>
                <span>
                  <span
                    key={ trackId }
                    className="text-white opacity-50">by{' '}
                  </span>
                  <span
                    key={ trackId }
                    onClick={() => setSearchedArtist(removeAccents(artistName))}
                    className="text-white 
                    opacity-50 hover:opacity-100 transition duration-300 hover:cursor-pointer">
                    { artistName.length > 25
                      ? `${ artistName.slice(0, -(artistName.length - 25)) }...`
                      : artistName 
                    }
                  </span>
                </span>
              </div>
            </div>))
          }
        </div>
      </div>
    </aside>
  );
}
export default SearchAsideBar;