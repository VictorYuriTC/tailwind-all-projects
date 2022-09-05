import React, { useState } from 'react'
import AddToFavoriteHeartSVG from './svgs/AddToFavoriteHeartSVG';
import SwatchCard from './SwatchCard';

function ClothCard({ cloth }) {
  const [imageSrc, setImageSrc] = useState(cloth.image[0].src)

  const {
    price,
    title,
    sellingAttribute,
    swatches
  } = cloth;

  const onMouseEnterChangeImageSrc = () => {
    setImageSrc(cloth.image[0].dataAltImage)
  }

  const onMouseLeaveChangeImageSrc = () => {
    setImageSrc(cloth.image[0].src)
  }


  return (
    <div className="cloth-card flex flex-col items-center justify-center p-1">
      <div className="group">
        <img
          src={ imageSrc }
          alt={ cloth.image[0].alt }
          onMouseEnter={ onMouseEnterChangeImageSrc }
          onMouseLeave={ onMouseLeaveChangeImageSrc }
          className="group-hover:cursor-pointer focus:opacity-20 transition"
        />
        <AddToFavoriteHeartSVG
          className="transition duration-200 group-hover:cursor-pointer -translate-y-7 translate-x-distant hover:fill-red-300"
          articleCode={ cloth.articleCode }
        />
      </div>

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
  );
}
export default ClothCard;