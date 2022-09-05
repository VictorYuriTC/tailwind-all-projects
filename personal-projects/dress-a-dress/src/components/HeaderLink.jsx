import React from 'react'
import { Link } from 'react-router-dom';

function HeaderLink({ text, className, to }) {
  return (
    <div className="m-3">
      <Link
        className={`${className} hover:scale-105 transition duration-400`}
        to={`${to}`}
      >
        { text }
      </Link>
    </div>
  );
}
export default HeaderLink;