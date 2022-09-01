import React from 'react'
import { useEffect, useState } from 'react';
import useGetUserFromAPI from '../hooks/useGetUserFromAPI';
function UserCard(props) {
  const user = useGetUserFromAPI();

  const { name, picture } = user;
  return (
    <section
      className="user flex flex-row items-center justify-center md:flex-col">
    <img
      src={ picture && picture.thumbnail}
      alt={ name ? `${name.title}. ${name.last}'s picture` : `User's picture`}
      className=""
      />
    </section>
  );
}

export default UserCard;