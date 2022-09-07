import React, { useContext, useEffect, useState } from 'react'
import ClothesContext from '../context/ClothesContext';
import AddToFavoriteHeartSVG from './svgs/AddToFavoriteHeartSVG';
import SwatchCard from './SwatchCard';

function ClothCard({ cloth }) {
  const [imageSrc, setImageSrc] = useState(cloth.image[0].src)
  const contextValue = useContext(ClothesContext);
  const { photo: { selectedPhoto } } = contextValue;

  useEffect(() => {
    if (selectedPhoto === 'model') setImageSrc(cloth.image[0].src)
    if (selectedPhoto === 'product') setImageSrc(cloth.image[0].dataAltImage)
  }, [selectedPhoto])

  const {
    marketingMarkerText,
    price,
    title,
    sellingAttribute,
    swatches
  } = cloth;

  const onMouseEnterChangeImageSrc = () => {
    if (selectedPhoto === 'model') setImageSrc(cloth.image[0].dataAltImage)
    if (selectedPhoto === 'product') setImageSrc(cloth.image[0].src)
  }
  const onMouseLeaveChangeImageSrc = () => {
    if (selectedPhoto === 'model') setImageSrc(cloth.image[0].src)
    if (selectedPhoto === 'product') setImageSrc(cloth.image[0].dataAltImage)
  }

  return (
    <div className="m-0 flex flex-col md:cloth-card">
      <div className="group flex flex-col justify-end">
        <img
          src={ imageSrc }
          alt={ cloth.image[0].alt }
          onMouseEnter={ onMouseEnterChangeImageSrc }
          onMouseLeave={ onMouseLeaveChangeImageSrc }
          className="group-hover:cursor-pointer focus:opacity-20 transition sm:w-full"
        />
        <AddToFavoriteHeartSVG
          className="absolute self-end m-[-10px] transition duration-200 group-hover:cursor-pointer w-7 h-7 stroke-1"
          articleCode={ cloth.articleCode }
        />
      </div>
  
      <div className="flex flex-col justify-end pt-2 pb-4 gap-[0.4vh]">
        <span className="font-mediumbold basis-4 grow text-start block font-base text-sm text-[#5f5f5f]">
          { marketingMarkerText }
        </span>
        <span className="font-mediumbold text-sm">{ title }</span>
        <span className="font-mediumbold text-sm">{ price }</span>
        <div className="font-mediumbold text-sm flex flex-row gap-1 pt-1 pb-1">
          { swatches.map(swatch => (
            <SwatchCard
              swatch={ swatch }
              key={ `${cloth.articleCode}-${swatch.colorCode}` }
            />))
          }
        </div>
        <span className="text-sm">{ sellingAttribute }</span>
      </div>
    </div>
  );
}

export default ClothCard;