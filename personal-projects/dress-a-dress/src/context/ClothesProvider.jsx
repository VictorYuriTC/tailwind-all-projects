import React, { useState } from 'react'
import ClothesContext from './ClothesContext';

function ClothesProvider({ children }) {
  const [searchedProductInput, setSearchedProductInput] = useState('');

  const contextValue = {
    search: {
      searchedProductInput,
      setSearchedProductInput,
    }
  }

  return (
    <ClothesContext.Provider value={ contextValue }>
      { children }
    </ClothesContext.Provider>
  );
}
export default ClothesProvider;