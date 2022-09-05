import React from 'react'
import { Link } from 'react-router-dom';

function HeaderLink({ text, className, to }) {
  return (
    <div className="group w-full m-3">
      <Link
        className={`${className} hover:scale-105 transition duration-400`}
        to={`${to}`}
      >
        { text }
      </Link>
      <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"/>
    </div>
  );
}
export default HeaderLink;