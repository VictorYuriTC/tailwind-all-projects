import React, { useState, useEffect, useContext } from 'react'
import ClothCard from './ClothCard';
import fashionData from '../services/fashionData';
import BlockSVG from './svgs/BlockSVG';
import SquaresSVG from './svgs/SquaresSVG';
import ClothesContext from '../context/ClothesContext';

function ClothesList() {
  const [renderClothes, setRenderClothes] = useState([]);
  const [gridCols, setGridCols] = useState('grid-cols-4');
  const [amountOfRenderedClothes, setAmountOfRenderedClothes] = useState(20);
  const [searchWarning, setSearchWarning] = useState('');
  const [amountOfClothesMessage, setAmountOfClothesMessage] = useState('');
  const contextValue = useContext(ClothesContext);

  const {
    search: { searchedProductInput },
    photo: { selectedPhoto, setSelectedPhoto }
  } = contextValue;

  useEffect(() => {
    const fetchedClothes = fashionData.slice(0, amountOfRenderedClothes);
    const clothes = fetchedClothes.map((cloth) => (
      <ClothCard
        key={ cloth.articleCode }
        cloth={ cloth }
      />
      ))
    setRenderClothes(clothes)
  }, [amountOfRenderedClothes]);

  useEffect(() => {
    if (searchedProductInput.value === ''
      && searchedProductInput.pressedKey === 'Enter') {
      setAmountOfRenderedClothes(0)
      setSearchWarning('You must provide at least one character to search a product by its name.');
      return;
    }

    if (searchedProductInput.pressedKey === 'Enter') {
      const fetchedClothes = fashionData
      .filter(cloth => cloth.title.toLowerCase().includes(searchedProductInput.value))

      .map(filteredCloth => (
        <ClothCard
          key={ filteredCloth.articleCode}
          cloth={ filteredCloth }
        />))
      if (fetchedClothes.length === 0) {
        setAmountOfRenderedClothes(fetchedClothes.length.toString());
        setRenderClothes([]);
        setSearchWarning('Sorry, there are no items with that description.');
        return;
      }
      setRenderClothes(fetchedClothes);
      setAmountOfRenderedClothes(fetchedClothes.length);
      setSearchWarning('');
    }
  }, [searchedProductInput])

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
        setAmountOfClothesMessage(`${fashionData.length} items`);
        setSearchWarning('We don\'t have as many items in stock, but we found those ones.');
        return;
      }
    if (key === 'Enter') {
      setAmountOfRenderedClothes(value);
      setSearchWarning('');
    }
  }

  useEffect(() => {
    if (Number(amountOfRenderedClothes) > 0) {
      setAmountOfClothesMessage(`${amountOfRenderedClothes} items`);
    }

    if (amountOfRenderedClothes === '0'
      || searchedProductInput === '') setAmountOfClothesMessage('No items found');
    
    if (amountOfRenderedClothes === '1') setAmountOfClothesMessage('1 item');
    
  }, [amountOfRenderedClothes, searchedProductInput])

  return (
      <div className="flex flex-col w-full ml-4 mr-4">
        <div className="flex flex-row justify-end items-center gap-10 mb-7 w-full">
          <h1 className="font-medium text-sm text-[#444444]">{ searchWarning }</h1>
          <input
            type="number"
            placeholder="Set amount of items"
            onKeyDown={ onEnterKeyDownSetAmountOfItems }
            className="text-black font-medium border focus:outline-orange-500 p-1 text-center min-w-max"
          />
            <h1 className="font-medium text-sm text-[#444444] text-center">
              { amountOfClothesMessage }
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