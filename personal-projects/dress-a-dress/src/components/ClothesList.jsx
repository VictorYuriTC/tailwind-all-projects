import React, { useState, useEffect } from 'react'
import ClothCard from './ClothCard';
import fashionData from '../services/fashionData';
import BlockSVG from './svgs/BlockSVG';
import SquaresSVG from './svgs/SquaresSVG';

function ClothesList(props) {
  const [renderClothes, setRenderClothes] = useState([]);
  const [gridCols, setGridCols] = useState('grid-cols-4');
  const [selectedPhoto, setSelectedPhoto] = useState('model');

  useEffect(() => {
    const fetchedClothes = fashionData.slice(0,20);
    const clothes = fetchedClothes.map((cloth) => (
      <ClothCard
        key={ cloth.articleCode }
        cloth={ cloth }
      />
      ))
    setRenderClothes(clothes)
    console.log(fetchedClothes)
  }, [])

  const onClickSetGridThreeGridCols = () => {
    setGridCols('grid-cols-3');
  }

  const onClickSetGridFourGridCols = () => {
    setGridCols('grid-cols-4');
  }

  const onClickSetModelPhotos = () => {
    setSelectedPhoto('model');
  }

  const onClickSetProductPhotos = () => {
    setSelectedPhoto('product');
  }

  return (
      <div className="ml-4 mr-4">
        <div className="flex flex-row justify-end gap-10 mb-7 w-full">
          <div>
            <button
              onClick={ onClickSetModelPhotos }
              style={ { color: selectedPhoto === 'model' ? 'red' : 'black' }}>
              Model
            </button>
            <div
              className="opacity-0 mt-1 border border-red-500"
              style={ { opacity: selectedPhoto === 'model' ? '1' : '0' }}
            />
          </div>

          <div>
            <button
              onClick={ onClickSetProductPhotos }
              style={ { color: selectedPhoto === 'product' ? 'red' : 'black' }}
            >
              Product
            </button>
            <div
              className="opacity-0 mt-1 border border-red-500"
              style={ { opacity: selectedPhoto === 'product' ? '1' : '0' }}
            />
          </div>
          <button
            onClick={ onClickSetGridThreeGridCols }
            
          >
            <BlockSVG
              className=""
              style={ { stroke: gridCols === 'grid-cols-3' ? 'red' : 'black' }}
            />
          </button>
          <button onClick={ onClickSetGridFourGridCols }>
            <SquaresSVG
              className=""
              style={ { stroke: gridCols === 'grid-cols-4' ? 'red' : 'black' }}
            />
          </button>
        </div>


        <div className={`grid ${ gridCols }`}>
          { renderClothes }
        </div>
      </div>
  );
}
export default ClothesList;