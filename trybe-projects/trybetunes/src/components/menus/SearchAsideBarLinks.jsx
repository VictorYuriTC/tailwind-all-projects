import React from 'react'
import { Link } from 'react-router-dom';
import HomeSVG from '../svgs/HomeSVG';
import UserSVG from '../svgs/UserSVG';
import StarSVG from '../svgs/StarSVG';

function SearchAsideBarLinks(props) {
  return (
    <div className="flex flex-col items-start gap-3">
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
  </div>
  );
}
export default SearchAsideBarLinks;