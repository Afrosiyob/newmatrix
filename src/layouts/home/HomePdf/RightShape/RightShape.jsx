import React from "react";

import "./RightShape.scss";

function RightShape() {
  return (
    <div className="right-shape">
      <svg
        width="136"
        height="260"
        viewBox="0 0 136 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.2959 76.637L143.815 101.791L184.065 233.895L1.2959 76.637Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M248.095 1.44107L143.815 101.791L184.065 233.895L248.095 1.44107Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M247.471 1.10845L144.16 102.309L0.671875 76.3044L247.471 1.10845Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="30.986"
            y1="174.061"
            x2="154.379"
            y2="136.465"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5539E7" />
            <stop offset="1" stopColor="#677AFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="154.38"
            y1="136.465"
            x2="277.773"
            y2="98.8687"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFA318" />
            <stop offset="1" stopColor="#FFD749" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="143.229"
            y1="101.484"
            x2="124.099"
            y2="38.6979"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#745FF3" />
            <stop offset="1" stopColor="#936DFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default RightShape;
