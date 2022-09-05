import React, { useState } from 'react'
import ClothesContext from './ClothesContext';

function ClothesProvider({ children }) {
  const [searchedProductInput, setSearchedProductInput] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState('model');

  const contextValue = {
    search: {
      searchedProductInput,
      setSearchedProductInput,
    },
    photo: {
      selectedPhoto,
      setSelectedPhoto,
    },
  }

  return (
    <ClothesContext.Provider value={ contextValue }>
      { children }
    </ClothesContext.Provider>
  );
}
export default ClothesProvider;