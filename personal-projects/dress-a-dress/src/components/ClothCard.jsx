import React, { useCallback, useState } from 'react'
import HeartSVG from '../assets/images/svgs/miscellaneous/svgs';

function ClothCard({ cloth }) {
  const [imageSrc, setImageSrc] = useState(cloth.image[0].src)

  const { price, title } = cloth;

  const onMouseEnterChangeImageSrc = () => {
    setImageSrc(cloth.image[0].dataAltImage)
  }

  const onMouseLeaveChangeImageSrc = () => {
    setImageSrc(cloth.image[0].src)
  }


  return (
    <div className="cloth-card flex flex-col items-center justify-center border-2 p-3">
      <div className="group">
        <img
          src={ imageSrc }
          alt={ cloth.image[0].alt }
          onMouseEnter={ onMouseEnterChangeImageSrc }
          onMouseLeave={ onMouseLeaveChangeImageSrc }
        />
        <span className="">
          <HeartSVG className="transition duration-200 group-hover:cursor-pointer -translate-y-7 translate-x-distant hover:fill-red-400"/>
        </span>
      </div>
      <span className="p-3 border rounded m-3 text-center w-full h-full">{ title }</span>
      <span>{ price }</span>
    </div>
  );
}
export default ClothCard;