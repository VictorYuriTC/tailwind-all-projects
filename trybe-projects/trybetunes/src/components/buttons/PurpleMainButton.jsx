import React from 'react'

function PurpleMainButton({ className, onClick, spanText, style, disabled }) {
  return (
    <button
    onClick={ onClick }
    className={`${ className } text-white md:w-auto flex justify-center items-center space-x-2 font-sans font-semibold rounded-md shadow-lg px-3 py-2 border transition duration-200 bg-his-purple`}
    disabled={ disabled }
    style={ style }
  >
    <span className="text-white">
      { spanText }
    </span>
  </button>
  );
}
export default PurpleMainButton;