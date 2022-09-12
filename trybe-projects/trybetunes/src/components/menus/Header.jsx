import React from 'react'
import EarbudSVG from '../svgs/Earbud.SVG';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <section className="bg-white flex flex-row items-center mb-10">
      <Link
        to="/search"
        className="flex flex-row items-center hover:scale-105 hover:cursor-pointer 
        transition duration-500 gap-2 pl-4 pb-2 pt-2">
        <span className="">
          { <EarbudSVG className="fill-his-purple w-10 h-10"/> }
        </span>
        <h1 className="text-his-purple text-3xl font-bold">
          iTrybeTunes
        </h1>
      </Link>
    </section>
  );
}
export default Header;