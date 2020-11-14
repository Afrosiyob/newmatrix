import React from "react";

import { Container } from "reactstrap";
import Ripples from "react-ripples";
import "./HomeHeader.scss";
import HomeHeaderSlider from "./HomeHeaderSlider/HomeHeaderSlider";

function HomeHeader() {
  const checkScrollTop = () => {
    // if (!counterOne && window.pageYOffset > 3600) {
    // } else if (counterOne && window.pageYOffset <= 3600) {
    // }
    console.log(window.pageYOffset);
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="home-header" id="section1">
      <div className="home-header-main-info">
        <Container>
          <h1 className="mb-3">Business Trend Company</h1>
          <h4 className="mb-3">Dreams come true with us</h4>
          <div className="wrap-btns">
            <Ripples
              color="rgba(255,255,255,0.5)"
              className="mr-3 mb-3 rounded-pill"
            >
              <button className="header-btn  px-5 py-2 rounded-pill">
                Became partner
              </button>
            </Ripples>
            <Ripples
              color="rgba(255,255,255,0.5)"
              className="mr-3 mb-3 rounded-pill"
            >
              <button className="header-btn rounded-pill px-5 py-2">
                Watch intro
              </button>
            </Ripples>
          </div>
        </Container>
      </div>

      <div className="shape-one">
        <svg
          width="597"
          height="597"
          viewBox="0 0 597 597"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M162.818 188.377L217.938 59.1993L276.415 369.373L221.428 498.421L162.818 188.377Z"
            fill="url(#paint0_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M503.531 415.044L558.651 285.866L276.415 369.373L221.428 498.421L503.531 415.044Z"
            fill="url(#paint1_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M558.651 285.866L276.415 369.373L217.938 59.1993L558.651 285.866Z"
            fill="url(#paint2_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="330.273"
              y1="391.655"
              x2="109.057"
              y2="166.085"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5D31EA" />
              <stop offset="1" stopColor="#8FE9DF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="250.931"
              y1="528.556"
              x2="529.137"
              y2="255.72"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B50E0" />
              <stop offset="1" stopColor="#6A7DFF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="232.941"
              y1="324.986"
              x2="418.552"
              y2="142.958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5F2EEA" />
              <stop offset="1" stopColor="#3B50E0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="shape-two">
        <svg
          width="360"
          height="276"
          viewBox="0 0 360 276"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M97.6316 261.132L215.958 244.722L273.123 325.917L97.6316 261.132Z"
            fill="url(#paint0_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M271.306 138.858L215.959 244.722L273.123 325.917L271.306 138.858Z"
            fill="url(#paint1_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M271.306 138.858L215.958 244.722L87.1792 61.8077L271.306 138.858Z"
            fill="url(#paint2_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M97.6317 261.132L215.959 244.722L87.1793 61.8077L97.6317 261.132Z"
            fill="url(#paint3_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="141.984"
              y1="324.088"
              x2="228.802"
              y2="262.965"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5F2EEA" />
              <stop offset="1" stopColor="#8960FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="228.802"
              y1="262.965"
              x2="315.621"
              y2="201.841"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5F2EEA" />
              <stop offset="1" stopColor="#7385FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="151.571"
              y1="153.268"
              x2="238.389"
              y2="92.1442"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5F2EEA" />
              <stop offset="1" stopColor="#8E9DFF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="172.573"
              y1="275.318"
              x2="43.7505"
              y2="92.3416"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8191FF" />
              <stop offset="1" stopColor="#7C50F8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="shape-three">
        <svg
          width="231"
          height="255"
          viewBox="0 0 231 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.3264 1.07321L156.561 92.4392L127.393 227.424L44.3264 1.07321Z"
            fill="url(#paint0_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M296.506 55.5649L156.561 92.4392L127.393 227.424L296.506 55.5649Z"
            fill="url(#paint1_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M296.123 54.9706L156.61 93.0592L43.9434 0.478882L296.123 54.9706Z"
            fill="url(#paint2_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="22.8213"
              y1="100.625"
              x2="148.905"
              y2="127.869"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DF5000" />
              <stop offset="1" stopColor="#FFC93D" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="148.905"
              y1="127.869"
              x2="274.989"
              y2="155.114"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA318" />
              <stop offset="1" stopColor="#FFD749" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="156.199"
              y1="91.8856"
              x2="170.062"
              y2="27.7309"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9900" />
              <stop offset="1" stopColor="#FFCF24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="shape-four">
        <svg
          width="264"
          height="373"
          viewBox="0 0 264 373"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M104.442 60.652L184.761 188.617L116.485 304.308L36.1026 176.452L104.442 60.652Z"
            fill="url(#paint0_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M335.607 197.074L184.761 188.617L116.485 304.308L267.267 312.874L335.607 197.074Z"
            fill="url(#paint1_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M104.224 60.5233L184.761 188.617L335.825 197.203L255.224 69.2183L104.224 60.5233Z"
            fill="url(#paint2_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="52.6552"
              y1="148.404"
              x2="168.237"
              y2="216.615"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#613FEA" />
              <stop offset="1" stopColor="#7773FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="168.238"
              y1="216.615"
              x2="283.82"
              y2="284.826"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B32E9" />
              <stop offset="1" stopColor="#6679FC" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="184.774"
              y1="188.594"
              x2="255.243"
              y2="69.1864"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5C32E9" />
              <stop offset="1" stopColor="#81B4E3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="slider-box">
        <Container>
          {" "}
          <HomeHeaderSlider />{" "}
        </Container>
      </div>
    </div>
  );
}

export default HomeHeader;
