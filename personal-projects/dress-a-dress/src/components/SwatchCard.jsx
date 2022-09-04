import React from 'react'

function SwatchCard({ swatch }) {
  return (
    <div
      style={ { backgroundColor: `${swatch.colorCode}`} }
      className="w-3 h-3 rounded-full"
      >
  
    </div>
  );
}
export default SwatchCard;