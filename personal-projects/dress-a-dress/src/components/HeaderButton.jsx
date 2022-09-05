import React from 'react'

function HeaderButton({ text, className }) {
  return (
    <div className="group w-full">
      <button
        className={`${className} hover:scale-105 transition duration-400`}
      >
        { text }
      </button>
      <div className="hidden group-hover:flex border border-black"></div>
    </div>
  );
}
export default HeaderButton;