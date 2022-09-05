import React from 'react'
import { Link } from 'react-router-dom';

function UnderlinedHeaderLink({ className, text, to}) {
  return (
    <div className="group m-3">
      <Link
        className={`${className} hover:scale-105 transition duration-400`}
        to={`${to}`}
      >
        { text }
      </Link>
      <div className="opacity-0 mt-2 relative border border-black group-hover:opacity-100
        transition duration-400"/>
    </div>
  );
}
export default UnderlinedHeaderLink;