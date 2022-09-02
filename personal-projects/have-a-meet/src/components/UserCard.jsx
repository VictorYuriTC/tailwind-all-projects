import React from 'react'
import { useState } from 'react';
import useGetUserFromAPI from '../hooks/useGetUserFromAPI';
import UserCardButton from './UserCardButton';
import Header from './Header';

function UserCard(props) {
  const ABOUT_SECTION = 'About Section'
  const CONTACT_SECTION = 'Contact Section'
  const [selectedSection, setSelectedSection] = useState('');
  const user = useGetUserFromAPI();

  const { name, picture } = user;

  return (
    <>
      <Header />
      <div
        className="user
          flex flex-col items-center justify-center
          border-b-2
          p-3 gap-2">
        <img
          src={ picture && picture.large}
          alt={ name ? `${name.title}. ${name.last}'s picture` : `User's picture`}
          className="user-image rounded-lg shadow-md"
        />
        <h1 className="bg-light-grey text-black font-bold shadow-md
        p-3">
          { name && `${name.first} ${name.last}` }
        </h1>

        <div className="section-buttons
          flex-col md:flex-row md:space-between
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