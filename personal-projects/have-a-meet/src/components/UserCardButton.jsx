import React from 'react'

function UserCardButton({ textButton, onClick }) {
  return (
    <button
      onClick={ onClick }
      className="bg-crystal-blue text-white font-bold
        hover:bg-dark-crystal-blue hover:translate-y-[-2px] transition duration-500
        p-2 m-1 rounded-lg"
    >
    { textButton }
  </button>
  );
}
export default UserCardButton;