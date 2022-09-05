import React, { useState } from 'react'
import { BAG_SVG } from '../assets/images/svgs/miscellaneous/svgs';
import HeartSVG from './svgs/HeartSVG';
import TrashSVG from './svgs/TrashSVG';
import SwatchCard from './SwatchCard';

function FavoriteClothCard({ cloth }) {
  const [imageSrc, setImageSrc] = useState(cloth.image[0].src)

  const {
    price,
    title,
    sellingAttribute,
    swatches
  } = cloth;

  return (
    <div className="cloth-card flex flex-col items-center justify-center p-1">
      <div className="group">
        <img
          src={ imageSrc }
          alt={ cloth.image[0].alt }
          className="group-hover:cursor-pointer focus:opacity-20 transition"
        />
        <TrashSVG
          className="transition duration-200 group-hover:cursor-pointer -translate-y-7 translate-x-distant hover:fill-gray-300"
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

      <button
        className="flex flex-row items-center justify-center
        bg-[#232323] w-full h-full p-4 gap-2 hover:bg-[#555555]"
      >
        <span>
          { BAG_SVG }
        </span>
        <span className="text-white font-medium">
          Add to cart
        </span>
      </button>

    </div>
  );
}
export default FavoriteClothCard;