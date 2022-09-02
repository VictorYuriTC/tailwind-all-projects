import React from 'react'

function UserCardButton({ textButton, onClick }) {
  return (
    <button
      onClick={ onClick }
      className="bg-crystal-blue text-white font-black
        hover:bg-dark-crystal-blue hover:translate-y-[-2px] transition duration-500
        shadow-lg p-2 m-2 rounded-lg"
    >
    { textButton }
  </button>
  );
}
export default UserCardButton;