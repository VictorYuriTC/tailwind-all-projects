import React, { useState } from 'react'
import ClothesContext from './ClothesContext';

function ClothesProvider({ children }) {
  const [searchedProductInput, setSearchedProductInput] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState('model');
  const [amountOfCartItems, setAmountOfCarItems] = useState(0);
  const [stateFavoriteClothes, setStateFavoriteClothes] = useState([]);
  const [stateCartClothes, setStateCartClothes] = useState([]);
  const [selectedPhotoSize, setSelectedPhotoSize] = useState('object-scale-down');
  const [photoWidthDisplay, setPhotoWidthDisplay] = useState('')

  const contextValue = {
    search: {
      searchedProductInput,
      setSearchedProductInput,
    },
    photo: {
      selectedPhoto,
      setSelectedPhoto,
    },
    cart: {
      amountOfCartItems,
      setAmountOfCarItems,
    },
    localStorageChanges: {
      onFavorites: {
        stateFavoriteClothes,
        setStateFavoriteClothes,
      },
      onCart: {
        stateCartClothes,
        setStateCartClothes,
      },
    },
    photoSize: {
      selectedPhotoSize,
      setSelectedPhotoSize,
      photoWidthDisplay,
      setPhotoWidthDisplay,
    },
  }

  return (
    <ClothesContext.Provider value={ contextValue }>
      { children }
    </ClothesContext.Provider>
  );
}
export default ClothesProvider;