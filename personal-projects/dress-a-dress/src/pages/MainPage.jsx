import React, { useEffect, useState } from 'react'
import fashionData from "../services/fashionData"
import ClothCard from '../components/ClothCard';
import { setInitialLocalStorage } from '../localStorage/localStorage';

function MaingPage(props) {
  const [renderClothes, setRenderClothes] = useState([]);

  useEffect(() => {
    const fetchedClothes = fashionData;
    const clothes = fetchedClothes.map((cloth) => (
      <ClothCard
        key={ cloth.articleCode }
        cloth={ cloth }
      />
      ))
    setRenderClothes(clothes)
    console.log(fetchedClothes)
  }, [])

  return (
    <div className='grid grid-cols-4'>
       { renderClothes  }
    </div>
  );
}
export default MaingPage;