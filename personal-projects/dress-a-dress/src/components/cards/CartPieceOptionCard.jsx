import React from 'react'

function CartPieceOption({ name, value, className }) {
  return (
    <option
      name={ name }
      value={ value }
      className={`${className} bg-white border"`}
    >
      { value }
    </option>
  );
}
export default CartPieceOption;