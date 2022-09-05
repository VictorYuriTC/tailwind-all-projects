import { FAVORITE_CLOTHES } from "../constants/constants"

export const setItemInLocalStorage = (itemKey, itemValue) => {
  const value = JSON.stringify(itemValue)
  localStorage.setItem(itemKey, value)
}

export const getItemFromLocalStorage = (itemKey) => {
  const value = JSON.parse(localStorage.getItem(itemKey))
  return value;
}

export const removeItemFromLocalStorage = (itemKey) => {
  const key = JSON.stringify(itemKey)
  localStorage.removeItem(key)
}

export const setInitialLocalStorage = () => {
  const favoriteClothes = getItemFromLocalStorage(FAVORITE_CLOTHES)

  if(!favoriteClothes) {
    setItemInLocalStorage(FAVORITE_CLOTHES, [])
  }
}