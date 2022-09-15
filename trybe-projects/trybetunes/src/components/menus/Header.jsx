import React from 'react'
import EarbudSVG from '../svgs/Earbud.SVG';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <section className="bg-her-green h-[3.25rem] fixed inset-x-0 top-0 z-10 flex flex-row items-center justify-center">
      <Link
        to="/search"
        className="fixed flex flex-row items-center justify-center hover:scale-105 
          hover:cursor-pointer transition duration-500 gap-2 pb-2 pt-2">
        <span className="">
          { <EarbudSVG className="fill-white w-10 h-10"/> }
        </span>
        <h1 className="text-white text-4xl font-medium">
          iTrybeTunes
        </h1>
      </Link>
    </section>
  );
}
export default Header;