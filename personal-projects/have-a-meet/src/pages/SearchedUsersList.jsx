import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserCard from '../components/UserCard';
import SearchedUsersContext from '../context/SearchedUsersContext';
import Header from '../components/Header';

function SearchedUsersList () {
  const [renderUsers, setRenderUsers] = useState([]);
  const contextValue = useContext(SearchedUsersContext)
  const {
    search: { searchedCity },
    users: { allRegisteredUsers }
  } = contextValue;

  useEffect(() => {
    const cityNormalized = searchedCity
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const filteredUsers = allRegisteredUsers
      .filter((user) => cityNormalized.includes((user.location.city).toLowerCase()) )

    const mappedUsers = filteredUsers
      .map((user) => ( <UserCard user={ user }/> ))
    setRenderUsers(mappedUsers);
  }, [])

  return (
    <>
      <Header />
      <section>
        { renderUsers }
      </section>
    </>
  );
}
export default SearchedUsersList;