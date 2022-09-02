import React from 'react'
import { useState } from 'react';
import UserCardButton from './UserCardButton';

function UserCard({ user }) {
  const ABOUT_SECTION = 'About Section'
  const CONTACT_SECTION = 'Contact Section'
  const [selectedSection, setSelectedSection] = useState('');

  const { name, picture } = user;

  return (
    <>
      <div
        className="flex flex-col items-center justify-center border-b-2 p-3 
          lg:p-0.5 lg:gap-1 bg-blurred-white border rounded m-1.5">
          <img
            src={ picture && picture.large}
            alt={ name ? `${name.title}. ${name.last}'s picture` : `User's picture`}
            className="xsm:w-full mt-1.5 sm:w-44 lg:w-40 user-image rounded-xl"
          />
        <h1 className="bg-light-grey text-center text-black text-lg font-normal p-3 border rounded-2xl">
            { name && `${name.first} ${name.last}` }
          </h1>

        <div className="section-buttons flex
          flex-col flex-no-wrap md:flex-row md:space-between">
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