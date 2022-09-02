import React, { useState } from 'react'
import SearchedUsersContext from './SearchedUsersContext';

function SearchedUsersProvider({ children }) {
  const [searchedCity, setSearchedCity] = useState('');
  const [allRegisteredUsers, setAllRegisteredUsers] = useState([]);

  const contextValue = {
    search: {
      searchedCity,
      setSearchedCity
    },
    users: {
      allRegisteredUsers,
      setAllRegisteredUsers
    }
  }

  return (
    <SearchedUsersContext.Provider value={ contextValue }>
      { children }
    </SearchedUsersContext.Provider>
  );
}
export default SearchedUsersProvider;