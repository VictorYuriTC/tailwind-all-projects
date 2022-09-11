import React from 'react'
import EarbudSVG from './svgs/Earbud.SVG';

function Header(props) {
  return (
    <section className="flex flex-row items-center justify-center gap-6 p-1 hover:scale-105 transition duration-500 hover:cursor-pointer">
      <span>
        { <EarbudSVG className="fill-[#400090] w-16 h-16"/> }
      </span>
      <h1 className="text-[#400090] text-5xl font-bold">
        iTrybeTunes
      </h1>
    </section>
  );
}
export default Header;