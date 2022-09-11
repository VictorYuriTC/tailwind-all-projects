import React from 'react'
import EarbudSVG from '../svgs/Earbud.SVG';

function Header(props) {
  return (
    <section className="flex flex-row items-center justify-center p-1">
      <div className="flex flex-row items-center hover:scale-105 hover:cursor-pointer 
        transition duration-500 gap-6">
      <span className="">
        { <EarbudSVG className="fill-his-purple w-16 h-16"/> }
      </span>
      <h1 className="text-his-purple text-5xl font-bold">
        iTrybeTunes
      </h1>
      </div>
    </section>
  );
}
export default Header;