import React from 'react'

function ArrowSVG(props) {
  return (
    <svg
      xmlns="https://wwww.org/2000.svg"
      class="w-7"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#FFFFFF"
      fill=""
      stroke-linecap="round"
      stroke-linejoin="round">
      <path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
      />
      <line
        x1="13"
        y1="18"
        x2="19"
        y2="12"
      />
      <line
        x1="13"
        y1="6"
        x2="19"
        y2="12"
      />
    </svg>
    );
}
export default ArrowSVG;