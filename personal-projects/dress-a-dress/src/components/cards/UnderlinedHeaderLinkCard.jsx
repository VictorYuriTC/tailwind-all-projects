import React from 'react'
import { Link } from 'react-router-dom';

function UnderlinedHeaderLinkCard({ classNameDiv, className, text, to}) {
  return (
    <div className={`${classNameDiv} group flex flex-col`}>
      <Link
        className={`${className} font-[400] text-end hover:scale-105 transition duration-400`}
        to={`${to}`}
      >
        { text }
      </Link>
      <div className="opacity-0 mt-2 border border-black group-hover:opacity-100
        transition duration-400 w-full"/>
    </div>
  );
}

export default UnderlinedHeaderLinkCard;