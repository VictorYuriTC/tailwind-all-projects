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
    <div className="cloth-card flex flex-col p-1">
      <div className="group flex flex-col justify-end">
        <img
          src={ imageSrc }
          alt={ cloth.image[0].alt }
          onMouseEnter={ onMouseEnterChangeImageSrc }
          onMouseLeave={ onMouseLeaveChangeImageSrc }
          className="group-hover:cursor-pointer focus:opacity-20 transition"
        />
        <AddToFavoriteHeartSVG
          className="absolute self-end m-[-5px] transition duration-200 group-hover:cursor-pointer"
          articleCode={ cloth.articleCode }
        />
      </div>
  
      <div className="flex flex-col justify-center">
        <span className="grow text-start font-medium text-sm text-[#5f5f5f]">{ marketingMarkerText }</span>
        <span className="text-start text-sm">{ title }</span>
        <span className="text-start text-sm">{ price }</span>
        <div className="flex flex-row gap-1" >
          { swatches.map(swatch => (
            <SwatchCard
              swatch={ swatch }
              key={ `${cloth.articleCode}-${swatch.colorCode}` }
            />))
          }
        </div>
        <span className="text-start text-xs">{ sellingAttribute }</span>
      </div>
    </div>
  );
}

export default ClothCard;