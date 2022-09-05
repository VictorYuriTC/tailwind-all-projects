import React, { useEffect, useState } from 'react'
import TrashSVG from './svgs/TrashSVG';

function CartClothCard({ cloth, size, color, className }) {
  const [amountOfPieces, setAmountOfPieces] = useState(1);
  const {
    articleCode,
    price,
    title
  } = cloth;

  useEffect(() => {
    console.log(cloth)
  }, [])

  return (
    <div className="flex flex-row">
      <img
        src={cloth.image[0].dataAltImage}
        alt={cloth.image[0].alt}
        className={`${className} w-32`}
      />

      <div className="flex flex-col p-5">
        <div className="flex flex-row gap-20 justify-between">
          <h1>{ title }</h1>
          <TrashSVG className=""/>
        </div>

        <h3>{ price }</h3>

        <div className="flex flex-row gap-20 pt-2 font-light">
          <h3>Art. no.</h3>
          <h3>{ articleCode }</h3>
          <h3>Size: </h3>
          <h3>{ size = 0 }</h3>
        </div>

        <div className="flex flex-row gap-20 pb-2 font-light">
          <h3>Color:</h3>
          <h3>{ color = 'randomColor' }</h3>
          <h3>Total: </h3>
          <h3>{ amountOfPieces }</h3>
        </div>
      </div>

      <div>

      </div>




    </div>
  );
}
export default CartClothCard;