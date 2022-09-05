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

  const onMouseEnterChangeImageSrc = () => setImageSrc(cloth.image[0].dataAltImage)
  const onMouseLeaveChangeImageSrc = () => setImageSrc(cloth.image[0].src)

  return (
    <div className="cloth-card grid p-1 w-fit">
      <div className="group">
        <img
          src={ imageSrc }
          alt={ cloth.image[0].alt }
          onMouseEnter={ onMouseEnterChangeImageSrc }
          onMouseLeave={ onMouseLeaveChangeImageSrc }
          className="group-hover:cursor-pointer focus:opacity-20 transition w-fit"
        />
        <AddToFavoriteHeartSVG
          className="absolute self-end items-end transition duration-200 group-hover:cursor-pointer -translate-y-6 translate-x-distant"
          articleCode={ cloth.articleCode }
        />
      </div>
  
      <div className="flex flex-col">
        <span className="grow self-start text-start font-medium text-sm text-[#5f5f5f]">{ marketingMarkerText }</span>
        <span className="self-start text-start text-sm">{ title }</span>
        <span className="self-start text-start text-sm">{ price }</span>
        <span className="self-start flex flex-row gap-1" >
          { swatches.map(swatch => (
            <SwatchCard
              swatch={ swatch }
              key={ `${cloth.articleCode}-${swatch.colorCode}` }
            />))
          }
        </span>
        <span className="self-start text-start text-xs">{ sellingAttribute }</span>
      </div>
    </div>
  );
}

export default ClothCard;