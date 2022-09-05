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
      <section className="grid xsm:grid-cols-1 grid-cols-2 items-center justify-center
        md:grid-cols-3 lg:grid-cols-4">
        { renderUsers.length > 0
          ? renderUsers
          : <h1 className="self-center text-2xl text-center font-bold">
              No user found
            </h1>
        }
      </section>
    </>
  );
}
export default SearchedUsersList;