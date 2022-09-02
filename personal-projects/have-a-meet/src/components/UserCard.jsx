import React from 'react'
import { useState } from 'react';
import UserCardButton from './UserCardButton';

function UserCard({ user }) {
  const ABOUT_SECTION = 'About Section'
  const CONTACT_SECTION = 'Contact Section'
  const [selectedSection, setSelectedSection] = useState('');

  const { name, picture } = user;
  console.log(picture)

  return (
    <>
      <div
        className="flex flex-col items-center justify-center content-center justify-items-center border-b-2 p-3 gap-2 lg:p-0.5 lg:gap-1">
        <div>
          <img
            src={ picture && picture.large}
            alt={ name ? `${name.title}. ${name.last}'s picture` : `User's picture`}
            className="xsm:w-56 w-52 md:w-48 lg:w-36 user-image rounded-xl shadow-md"
          />
          <h1 className="bg-light-grey text-center text-black font-bold shadow-md p-3">
            { name && `${name.first} ${name.last}` }
          </h1>
        </div>

        <div className="section-buttons flex
          flex-col flex-no-wrap md:flex-row md:space-between
          p-1">
          <UserCardButton
            onClick={() => { setSelectedSection(ABOUT_SECTION) }}
            textButton={'About'}
          />
          <UserCardButton
            onClick={() => {}}
            textButton={'Send a message'}
          />
          <UserCardButton 
            onClick={() => { setSelectedSection(CONTACT_SECTION) }}
            textButton={'Contact'}
          />
        </div>
      </div>
    </>
  );
}

export default UserCard;