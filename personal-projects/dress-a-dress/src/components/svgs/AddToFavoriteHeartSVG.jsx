import React, { useEffect, useState } from 'react';
import { FAVORITE_CLOTHES } from '../../constants/constants';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../../localStorage/localStorage';

function AddToFavoriteHeartSVG({ className, articleCode }) {
  const [fillColor, setFillColor] = useState('white')
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const setInitialFillColor = () => {
      const favoriteClothes = getItemFromLocalStorage(FAVORITE_CLOTHES);

      if (favoriteClothes.includes(articleCode)) setFillColor('red');
    }

    setInitialFillColor();
  }, [])

  useEffect(() => {
    ;
  }, [])

  const onClickSetFavoriteItem = () => {
    const favoriteClothes = getItemFromLocalStorage(FAVORITE_CLOTHES);

    if (favoriteClothes.includes(articleCode)) {
      const favoriteClothesAfterDeletion = favoriteClothes
        .filter(favoriteCode => favoriteCode !== articleCode)
      setItemInLocalStorage(FAVORITE_CLOTHES, favoriteClothesAfterDeletion);
      setFillColor('white')
      return;
    }

    setItemInLocalStorage(FAVORITE_CLOTHES, [...favoriteClothes, articleCode])
    setFillColor('red')
  }

  const onMouseEnterChangeFillColor = () => {
    setFillColor('red');
    setOpacity(0.5);
  }
  
  const onMouseLeaveChangeFillColor = () => {
    const favoriteClothes = getItemFromLocalStorage(FAVORITE_CLOTHES);
    setOpacity(1);

    if (favoriteClothes.includes(articleCode)) {
      setFillColor('red');
      return;
    }

    setFillColor('white');
  }

  return  (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className} w-6 h-6`}
        onClick={ onClickSetFavoriteItem }
        onMouseEnter={ onMouseEnterChangeFillColor }
        onMouseLeave={ onMouseLeaveChangeFillColor }
        style={ { fill: `${ fillColor }`, opacity }}
        >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  )
}

export default AddToFavoriteHeartSVG;