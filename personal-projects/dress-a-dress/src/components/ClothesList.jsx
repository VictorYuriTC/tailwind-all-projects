import React, { useState, useEffect } from 'react'
import ClothCard from './ClothCard';
import fashionData from '../services/fashionData';
import BlockSVG from './svgs/BlockSVG';
import SquaresSVG from './svgs/SquaresSVG';

function ClothesList(props) {
  const [renderClothes, setRenderClothes] = useState([]);
  const [gridCols, setGridCols] = useState('grid-cols-4');
  const [selectedPhoto, setSelectedPhoto] = useState('model');
  const [amountOfRenderedClothes, setAmountOfRenderedClothes] = useState(20);
  const [limitWarning, setLimitWarning] = useState('');

  useEffect(() => {
    const fetchedClothes = fashionData.slice(0, amountOfRenderedClothes);
    const clothes = fetchedClothes.map((cloth) => (
      <ClothCard
        key={ cloth.articleCode }
        cloth={ cloth }
      />
      ))
    setRenderClothes(clothes)
    console.log(fetchedClothes)
  }, [amountOfRenderedClothes])

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

  const onEnterKeyDownSetAmountOfItems = ({ key, target: { value }}) => {
    if (key === 'Enter'
      && value > fashionData.length) {
        setAmountOfRenderedClothes(fashionData.length);
        setLimitWarning('We don\'t have as many items, but we could find those.')
        return;
      }
    if (key === 'Enter') {
      setAmountOfRenderedClothes(value);
      setLimitWarning('');
    }
  }

  return (
      <div className="flex flex-col w-full ml-4 mr-4">
        <div className="flex flex-row justify-end items-center gap-10 mb-7 w-full">
          <h1 className="font-medium text-sm text-[#444444]">{ limitWarning }</h1>
          <input
            type="number"
            placeholder="Set amount of items"
            onKeyDown={ onEnterKeyDownSetAmountOfItems }
            className="text-black font-medium border focus:outline-orange-500 p-1 text-center min-w-max"
          />
            <h1 className="font-medium text-sm text-[#444444] text-center">
              { amountOfRenderedClothes } items
            </h1>
          <div>
            <button
              onClick={ onClickSetModelPhotos }
              className="font-medium text-sm"
              style={ { color: selectedPhoto === 'model' ? 'red' : '#444444' }}
            >
              <span>
                Model
              </span>
            </button>
            <div
              className="opacity-0 mt-1 border border-red-500"
              style={ { opacity: selectedPhoto === 'model' ? '1' : '0' }}
            />
          </div>

          <div>
            <button
              onClick={ onClickSetProductPhotos }
              className="font-medium text-sm"
              style={ { color: selectedPhoto === 'product' ? 'red' : '#444444' }}
            >
              Product
            </button>
            <div
              className="opacity-0 mt-1 border border-red-500"
              style={ { opacity: selectedPhoto === 'product' ? '1' : '0' }}
            />
          </div>
          <button onClick={ onClickSetGridThreeGridCols }
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