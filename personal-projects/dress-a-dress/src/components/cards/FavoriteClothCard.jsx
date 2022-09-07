import React  from 'react'
import { CART_CLOTHES, FAVORITE_CLOTHES } from '../../constants/constants';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../../localStorage/localStorage';
import BagSVG from '../svgs/BagSVG';
import TrashSVG from '../svgs/RemoveFromFavoriteTrashSVG';
import SwatchCard from './SwatchCard';

function FavoriteClothCard({ cloth }) {
  const {
    articleCode,
    marketingMarkerText,
    price,
    title,
    sellingAttribute,
    swatches
  } = cloth;

  const onCLickAddToCart = () => {
    const cartClothes = getItemFromLocalStorage(CART_CLOTHES);
    const favoriteClothes = getItemFromLocalStorage(FAVORITE_CLOTHES);
    setItemInLocalStorage(CART_CLOTHES, [...cartClothes, articleCode]);
  
    const favoriteClothesAfterDeletion = favoriteClothes
      .filter(favoriteCode => favoriteCode !== articleCode)
    setItemInLocalStorage(FAVORITE_CLOTHES, favoriteClothesAfterDeletion);
  }

  return (
    <div className="cloth-card flex flex-col w-full h-full">
      <div className="group flex flex-col justify-end">
        <img
          src={ cloth.image[0].src }
          alt={ cloth.image[0].alt }
          className="group-hover:cursor-pointer focus:opacity-20 transition h-fit"
        />
        <div className="absolute self-end transition duration-200 group-hover:cursor-pointer hover:opacity-60 bg-[#faf9f8] rounded-full p-1 m-1">
          <TrashSVG
            className=""
            articleCode={ cloth.articleCode }
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-full">
        <h1 className="w-full basis-[1rem] block text-sm font-medium text-[#5f5f5f]">
          { marketingMarkerText }
        </h1>
        <h1 className="text-sm">{ title }</h1>
        <h1 className="text-sm">{ price }</h1>
        <h1 className="flex flex-row gap-1" >
          { swatches.map(swatch => (
            <SwatchCard
              swatch={ swatch }
              key={ `${cloth.articleCode}-${swatch.colorCode}` }
            />))
          }
        </h1>
        <h1 className="text-start text-xs">{ sellingAttribute }</h1>
      </div>

      <button
        onClick={ onCLickAddToCart }
        className="flex flex-row items-center justify-center
        bg-[#232323] p-4 gap-2 hover:bg-[#555555] h-fit"
      >
        <span>
          <BagSVG className="stroke-white"/>
        </span>
        <span className="text-white font-medium">
          Add to cart
        </span>
      </button>
    </div>
  );
}
export default FavoriteClothCard;