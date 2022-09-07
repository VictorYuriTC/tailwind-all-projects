import React, { useState, useEffect, useContext } from 'react'
import ClothCard from './ClothCard';
import fashionData from '../services/fashionData';
import BlockSVG from './svgs/BlockSVG';
import SquaresSVG from './svgs/SquaresSVG';
import ClothesContext from '../context/ClothesContext';

function ClothesList() {
  const [renderClothes, setRenderClothes] = useState([]);
  const [gridCols, setGridCols] = useState('md:grid-cols-4');
  const [searchWarning, setSearchWarning] = useState('');
  const [amountOfClothesMessage, setAmountOfClothesMessage] = useState('');
  const contextValue = useContext(ClothesContext);
  const {
    search: { searchedProductInput },
    photo: { selectedPhoto, setSelectedPhoto },
    photoSize: {
      selectedPhotoSize, setSelectedPhotoSize,
      photoWidthDisplay, setPhotoWidthDisplay,
    },
  } = contextValue;

  useEffect(() => {
    const fetchedClothes = fashionData.slice(0, 20);
    const initialClothes = fetchedClothes.map((cloth) => (
      <ClothCard
        key={ cloth.articleCode }
        cloth={ cloth }
      />))
    setRenderClothes(initialClothes)
  }, []);

  useEffect(() => {
    if (searchedProductInput.value === ''
      && searchedProductInput.pressedKey === 'Enter') {
      setSearchWarning('You must provide at least one character to search a product by its name.');
      return;
    }

    if (searchedProductInput.pressedKey !== 'Enter') return;

    const fetchedClothes = fashionData
      .filter(cloth => cloth.title.toLowerCase().includes(searchedProductInput.value))
      .map(filteredCloth => (
        <ClothCard
          key={ filteredCloth.articleCode}
          cloth={ filteredCloth }
        />));

    if (fetchedClothes.length === 0) {
      setRenderClothes([]);
      setSearchWarning('Sorry, there are no items with that description.');
      return;
    }
    setRenderClothes(fetchedClothes);
    setSearchWarning('');
  }, [searchedProductInput])

  const onClickSetGridThreeGridCols = () => setGridCols('md:grid-cols-3');
  const onClickSetGridFourGridCols = () => setGridCols('md:grid-cols-4');
  const onClickSetModelPhotos = () => setSelectedPhoto('model');
  const onClickSetProductPhotos = () => setSelectedPhoto('product');

/*   const onEnterKeyDownSetAmountOfItems = ({ key, target: { value }}) => {
    if (key !== 'Enter') return;
    if (value > 100) {
      const maxFetchedClothes = fashionData
        .slice(200, 300)
        .map((cloth) => (
          <ClothCard
            key={ cloth.articleCode }
            cloth={ cloth }
          />))
      setRenderClothes(maxFetchedClothes);
      setSearchWarning('We could not bring you this amount of items, but we did found the following ones.');
      return;
    }
    const fetchedClothes = fashionData
      .slice(0, value)
    const clothes = fetchedClothes
      .map((cloth) => (
        <ClothCard
          key={ cloth.articleCode }
          cloth={ cloth }
        />))
    setRenderClothes(clothes)
    setSearchWarning('');
  } */

  useEffect(() => {
    if (renderClothes.length > 0) setAmountOfClothesMessage(`${renderClothes.length} items`);
    if (renderClothes.length < 1
      || (searchedProductInput.value === '' && searchedProductInput.pressedKey === 'Enter')) {
        setAmountOfClothesMessage('No items found');
      }
    if (renderClothes.length === 1) setAmountOfClothesMessage('1 item');
  }, [renderClothes]);

  useEffect(() => {
    const changePhotoSizeObjectState = () => {
      if (gridCols === 'md:grid-cols-4') {
        setSelectedPhotoSize('');
        return;
      }
      setSelectedPhotoSize('object-contain');
    }
    changePhotoSizeObjectState();
  }, [selectedPhoto])

  const renderWarning = searchWarning === ''
    ? <></>
    : <h1 className="font-medium text-sm text-[#444444]">{ searchWarning }</h1>

  return (
    <div className={`${ photoWidthDisplay } flex flex-col grow gap-8`}>
      <div className="5xsm:hidden 4xsm:hidden 3xsm:hidden 2xsm:hidden
        flex flex-row justify-center items-center gap-5
        sm:gap-10
        md:justify-around md:w-full
        xl:justify-end"
      >
        { renderWarning }
        {/* <div className="flex flex-col">
          <input
            type="number"
            placeholder="Set amount of items"
            onKeyDown={ onEnterKeyDownSetAmountOfItems }
            className="font-black focus:outline-none bg-main-bg w-44 md:ml-2"
          />
        <div className="border border-black mt-1"/>
        </div> */}
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

        <button onClick={ onClickSetGridThreeGridCols }>
          <BlockSVG
            className=""
            style={ { stroke: gridCols === 'md:grid-cols-3' ? 'red' : 'black' }}
          />
        </button>
          <button onClick={ onClickSetGridFourGridCols }>
            <SquaresSVG
              className=""
              style={ { stroke: gridCols === 'md:grid-cols-4' ? 'red' : 'black' }}
            />
          </button>
      </div>

      <div className={`grid 5xsm:grid-cols-1 4xsm:grid-cols-1 3xsm:grid-cols-2 2xsm:grid-cols-2 xsm:grid-cols-3 sm:grid-cols-2 gap-1 ${ gridCols }`}>
        { renderClothes }
      </div>
    </div>
  );
}
export default ClothesList;