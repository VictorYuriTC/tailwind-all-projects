import React, { useState } from 'react'
import SearchedUsersContext from './SearchedUsersContext';

function SearchedUsersProvider({ children }) {
  const [searchedCity, setSearchedCity] = useState('');

  const contextValue = {
    search: {
      searchedCity,
      setSearchedCity
    }
  }

  return (
    <SearchedUsersContext.Provider value={ contextValue }>
      { children }
    </SearchedUsersContext.Provider>
  );
}
export default SearchedUsersProvider;