import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserCard from '../components/UserCard';
import SearchedUsersContext from '../context/SearchedUsersContext';
import Header from '../components/Header';
import { normalizeString } from '../helpers/functions';

function SearchedUsersList () {
  const [renderUsers, setRenderUsers] = useState([]);
  const contextValue = useContext(SearchedUsersContext)
  const {
    search: { searchedCity },
    users: { allRegisteredUsers }
  } = contextValue;

  const { city } = useParams();

  useEffect(() => {
    const searchCityNormalized = normalizeString(city);

    const filteredUsers = allRegisteredUsers
      .filter((user) => searchCityNormalized.includes(normalizeString(user.location.city)))

    const mappedUsers = filteredUsers
      .map((user) => ( <UserCard user={ user }/> ))
    setRenderUsers(mappedUsers);
  }, [searchedCity])

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