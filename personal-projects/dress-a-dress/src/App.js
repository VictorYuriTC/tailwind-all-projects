import { useEffect, useState } from "react";
import HeartSVG, { HEART_ICON } from "./assets/images/svgs/miscellaneous/svgs";
import { getDataFromAPI } from "./services/fashionAPI";
import fashionData from "./services/fashionData";

function App() {
  return (
    <div className="grid grid-cols-5">
      { fashionData && (
        fashionData.map(({ title, image, price }) => (
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
        ))
      )}
    </div>
  );
}

export default App;
