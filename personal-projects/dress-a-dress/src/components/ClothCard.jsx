import React from 'react'
import HeartSVG from '../assets/images/svgs/miscellaneous/svgs';

function ClothCard({ cloth }) {
  const { image, price, title } = cloth;
  return (
    <div className="cloth-card flex flex-col items-center justify-center border-2 p-3">
            <div className="">
              <img
                src={ image[0].dataAltImage }
                alt={ image[0].alt }
              />
              <span className="">
                <HeartSVG className="transition duration-10000 hover:fill-red-400 hover:cursor-pointer absolute -translate-y-7 translate-x-distant hover:fill-red-100"/>
              </span>
            </div>
            <span className="p-3 border rounded m-3 text-center w-full h-full">{ title }</span>
            <span>{ price }</span>
          </div>
  );
}
export default ClothCard;