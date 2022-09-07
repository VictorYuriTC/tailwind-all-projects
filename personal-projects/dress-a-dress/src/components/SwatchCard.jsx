import React from 'react'

function SwatchCard({ swatch }) {
  return (
    <div
      style={ { backgroundColor: `${swatch.colorCode}`} }
      className="w-2 h-2 rounded-full"
      >
    </div>
  );
}

export default SwatchCard;