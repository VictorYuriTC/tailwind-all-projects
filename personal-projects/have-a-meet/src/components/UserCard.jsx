import React, { useEffect } from 'react'
import { useState } from 'react';
import AboutSectionCard from './AboutSectionCard';
import ContactSectionCard from './ContactSectionCard';
import UserCardButton from './UserCardButton';

function UserCard({ user }) {
  const ABOUT_SECTION = 'About Section'
  const CONTACT_SECTION = 'Contact Section'
  const [selectedSection, setSelectedSection] = useState('');

  const { name, picture, location, dob } = user;

  const onClickChangeSelectedSection = ({ target: { value }}) => {
    if (selectedSection === value) {
      setSelectedSection('');
      return;
    }
    setSelectedSection(value)
  }

  return (
    <>
      <div
        className="flex flex-col items-center justify-center border-b-2 p-3 
          lg:p-0.5 lg:gap-1 bg-white border rounded m-1.5">
        <img
          src={ picture && picture.large}
          alt={ name ? `${name.title}. ${name.last}'s picture` : `User's picture`}
          className="xsm:w-full mt-1.5 sm:w-44 lg:w-40 user-image rounded-xl"
        />

        <div className="flex flex-col p-1 w-full">
          <h1 className="bg-blurred-white text-center text-black text-lg font-medium
            p-3 border rounded-2xl">
            { name && `${name.first} ${name.last}` }
          </h1>
          <span className="font-extralight text-center">
            { location.city }, { location.state}, { location.country }
          </span>
        </div>

        <div className="section-buttons flex
          flex-col flex-no-wrap md:flex-row md:space-between">
          <UserCardButton
            onClick={ onClickChangeSelectedSection }
            textButton={'About'}
            value={ ABOUT_SECTION }
          />
          <UserCardButton
            onClick={() => {}}
            textButton={'Send a message'}
          />
          <UserCardButton 
            onClick={ onClickChangeSelectedSection }
            textButton={'Contact'}
            value={ CONTACT_SECTION }
          />
        </div>

        <div>
          { selectedSection === ABOUT_SECTION
            && <AboutSectionCard user={ user }/>
          }
        </div>

        <div>
          { selectedSection === CONTACT_SECTION
            && <ContactSectionCard user={ user }/>
          }
        </div>
      </div>
    </>
  );
}

export default UserCard;