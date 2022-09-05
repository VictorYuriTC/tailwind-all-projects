import React, { useState, useEffect } from 'react'
import ClothCard from './ClothCard';
import fashionData from '../services/fashionData';

function ClothesList(props) {
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
      { renderClothes }
    </div>
  );
}
export default ClothesList;