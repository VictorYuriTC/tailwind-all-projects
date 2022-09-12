import React from 'react'
import EarbudSVG from '../svgs/Earbud.SVG';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <section className="bg-white flex flex-row items-center justify-center mb-10">
      <Link
        to="/search"
        className="flex flex-row items-center hover:scale-105 hover:cursor-pointer 
        transition duration-500 gap-6 p-1">
        <span className="">
          { <EarbudSVG className="fill-his-purple w-16 h-16"/> }
        </span>
        <h1 className="text-his-purple text-5xl font-bold">
          iTrybeTunes
        </h1>
      </Link>
    </section>
  );
}
export default Header;