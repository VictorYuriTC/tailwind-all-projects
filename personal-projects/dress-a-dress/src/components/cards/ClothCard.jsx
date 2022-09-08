import React, { useContext, useEffect, useState } from 'react'
import ClothesContext from '../../context/ClothesContext';
import AddToFavoriteHeartSVG from '../svgs/AddToFavoriteHeartSVG';
import SwatchCard from './SwatchCard';

function ClothCard({ cloth }) {
  const [imageSrc, setImageSrc] = useState(cloth.image[0].src)
  const contextValue = useContext(ClothesContext);
  const {
    photo: { selectedPhoto },
    photoSize: { selectedPhotoSize }
  } = contextValue;

  useEffect(() => {
    if (selectedPhoto === 'model') setImageSrc(cloth.image[0].src)
    if (selectedPhoto === 'product') setImageSrc(cloth.image[0].dataAltImage)
  }, [selectedPhoto])

  const {
    marketingMarkerText,
    price,
    title,
    sellingAttribute,
    swatches,
    swatchesTotal
  } = cloth;

  useEffect(() => {
    console.log(cloth)
  }, [])

  const onMouseEnterChangeImageSrc = () => {
    if (selectedPhoto === 'model') setImageSrc(cloth.image[0].dataAltImage)
    if (selectedPhoto === 'product') setImageSrc(cloth.image[0].src)
  }
  const onMouseLeaveChangeImageSrc = () => {
    if (selectedPhoto === 'model') setImageSrc(cloth.image[0].src)
    if (selectedPhoto === 'product') setImageSrc(cloth.image[0].dataAltImage)
  }

  return (
    <div className="flex flex-col">
      <div className="group flex flex-col justify-end">
        <div className="flex flex-row relative pb-[150%]">
          <img
            src={ imageSrc }
            alt={ cloth.image[0].alt }
            onMouseEnter={ onMouseEnterChangeImageSrc }
            onMouseLeave={ onMouseLeaveChangeImageSrc }
            className={`absolute object-cover group-hover:cursor-pointer transition w-full`}
          />
        </div>
        <AddToFavoriteHeartSVG
          className="absolute self-end m-[-0.25rem] transition duration-200 group-hover:cursor-pointer w-7 h-7 stroke-1"
          articleCode={ cloth.articleCode }
        />
      </div>
  
      <div className="flex flex-col justify-end gap-[0.4vh]">
        <span className="font-mediumbold basis-4 text-start block font-base text-2xs text-[#5f5f5f]">
          { marketingMarkerText }
        </span>
        <span className="font-mediumbold text-xs">{ title }</span>
        <span className="font-mediumbold text-xs">{ price }</span>
        <div className="flex flex-row basis-[1rem] grow items-center justify-start gap-2
          font-mediumbold text-sm">
          <div className="flex gap-1">
            { swatches.map((swatch) => (
              <SwatchCard
                swatch={ swatch }
                key={ `${cloth.articleCode}-${swatch.colorCode}` }
              />))
            }
          </div>
          <div className="flex flex-row justify-center items-center text-2xs basis-[1rem] max-h-[1rem] font-medium">
            <span className="flex">
              { swatchesTotal - swatches.length > 0 && `+${ swatchesTotal - swatches.length }` }
            </span>
          </div>
        </div>
        <span className="text-2xs">{ sellingAttribute }</span>
      </div>
    </div>
  );
}

export default ClothCard;