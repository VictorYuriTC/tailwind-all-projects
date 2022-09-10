import React, { useState, useEffect, useContext } from 'react'
import ClothCard from '../cards/ClothCard';
import fashionData from '../../services/fashionData';
import BlockSVG from '../svgs/BlockSVG';
import SquaresSVG from '../svgs/SquaresSVG';
import ClothesContext from '../../context/ClothesContext';
import InfoSVG from '../svgs/InfoSVG';
import { BLACK_HEXCOLOR, MODEL, OPAQUE_GRAY_HEXCOLOR, PRODUCT, RED_HEXCOLOR } from '../../constants/constants';

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

  const [advertisementMsg, setAdvertisementMsg] = useState(`Extra 20% off Women's Sale sweaters`);

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

  const onEnterKeyDownSetAmountOfItems = ({ key, target: { value }}) => {
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
  }

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
      
    }
  }, [selectedPhoto])

  const renderWarning = searchWarning === ''
    ? <></>
    : <h1 className="font-medium text-sm text-[#444444]">{ searchWarning }</h1>

  return (
    <div className={`${ photoWidthDisplay } relative flex flex-col grow gap-7`}>
      <div className="advertisement flex flex-col items-center justify-center bg-[#e89494] p-5">
        <div className="justify-self-end">
          <h1 className="text-white text-center text-3xl font-semibold">
            { advertisementMsg }
          </h1>
        </div>
        <button className="absolute flex items-center self-end">
          <span className="self-end">
            <InfoSVG className="stroke-1 stroke-white fill-[#e89494] w-[2rem] h-[2rem]"/> 
          </span>
        </button>
      </div>
      
      <div className="hidden
        xsm:flex xsm:flex-row xsm:justify-end xsm:items-center xsm:gap-5
        sm:gap-10 md:w-full"
      >
      {/*   <div>
          <span>
            { renderWarning }
          </span>
        </div>

        <div className="flex flex-col">
          <input
            type="number"
            placeholder="Set amount of items"
            onKeyDown={ onEnterKeyDownSetAmountOfItems }
            className="font-black focus:outline-none bg-main-bg w-44 md:ml-2"
          />
        <div className="border border-black mt-1"/>
        </div> */}

        <div className="font-medium text-sm text-opaque-gray text-center">
          <span className="font-medium text-xs">{ amountOfClothesMessage }</span>
        </div>

        <div>
          <button
            onClick={ onClickSetModelPhotos }
            className="font-medium text-sm"
            style={ { color: selectedPhoto === MODEL ? RED_HEXCOLOR : OPAQUE_GRAY_HEXCOLOR }}
          >
            <span className="text-xs">
              Model
            </span>
          </button>
          <div
            className="opacity-0 mt-1 border border-red-500"
            style={ { opacity: selectedPhoto === MODEL ? '1' : '0' }}
          />
        </div>

        <div>
          <button
            onClick={ onClickSetProductPhotos }
            className="font-medium text-sm"
            style={ { color: selectedPhoto === PRODUCT ? RED_HEXCOLOR : OPAQUE_GRAY_HEXCOLOR }}
          >
            <span className="text-xs">Product</span>
          </button>
          <div
            className="opacity-0 mt-1 border border-red-500"
             style={ { opacity: selectedPhoto === PRODUCT ? '1' : '0' }}
          />
        </div>

        <button onClick={ onClickSetGridThreeGridCols }>
          <BlockSVG
            className=""
            style={ { stroke: gridCols === 'md:grid-cols-3' ? RED_HEXCOLOR : BLACK_HEXCOLOR }}
          />
        </button>
          <button onClick={ onClickSetGridFourGridCols }>
            <SquaresSVG
              className=""
              style={ { stroke: gridCols === 'md:grid-cols-4' ? RED_HEXCOLOR : BLACK_HEXCOLOR }}
            />
          </button>
      </div>

      <div className={`grid grid-cols-2 gap-1 ${ gridCols }`}>
        { renderClothes }
      </div>
    </div>
  );
}
export default ClothesList;