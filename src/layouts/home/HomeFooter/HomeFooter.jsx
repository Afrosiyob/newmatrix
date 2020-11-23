import React from "react";
import "./HomeFooter.scss";
import Ripples from "react-ripples";

import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

function HomeFooter() {
  const { t } = useTranslation();
  return (
    <div className="home-footer py-4" id="section5">
      <Container>
        <div className="footer-header d-flex w-100 justify-content-between align-content-center align-items-center">
          <div className="mob-footer-header">
            <svg
              width="378"
              height="162"
              viewBox="0 0 378 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M160.888 49.8724L144.156 52.8055L151.163 36.157L153.711 30.7558L155.339 27.3042C155.951 26.0064 156.664 24.7581 157.47 23.5707L159.633 20.3856C160.945 18.4531 162.498 16.6941 164.253 15.1508L167.229 12.5346C168.491 11.4249 169.851 10.4322 171.294 9.56873L175.495 7.05397C179.965 4.44597 184.842 2.604 189.922 1.60468L191.293 1.33505C193.998 0.822406 196.739 0.51892 199.491 0.427299L200.647 0.388819C204.595 0.257364 208.548 0.467219 212.46 1.01603L214.734 1.33505L217.587 2.05269C220.69 2.83324 223.72 3.88044 226.642 5.18255L228.827 6.15645L232.803 8.51794C234.571 9.5679 236.216 10.811 237.708 12.2243L238.825 13.2827L241.113 15.4896L242.011 16.4808C243.06 17.6383 244.009 18.8825 244.848 20.1997L245.055 20.5252L245.721 21.9088C246.289 23.0894 246.584 24.3824 246.584 25.692C246.584 26.5636 246.453 27.4303 246.196 28.2633L245.881 29.2852C245.335 31.0568 244.481 32.719 243.359 34.1964L241.87 36.157L239.115 38.9054C237.141 40.8744 234.88 42.5347 232.409 43.83L228.621 45.8156L217.282 50.5179L205.561 54.5847L188.49 58.6512L171.419 61.5744L158.818 62.7582L146.351 63.2337L132.941 63.4554C132.804 63.4576 132.785 63.258 132.921 63.2359L149.379 60.5576L159.826 58.6512L169.89 56.1096L180.464 53.6951L190.147 50.5179L197.153 48.1032L207.727 43.1468L210.607 41.7452C212.166 40.987 213.645 40.0759 215.021 39.0253L215.769 38.4555C216.774 37.688 217.694 36.8136 218.511 35.8479L218.953 35.3256C220.121 33.9444 221.01 32.3499 221.568 30.6308L221.894 29.63C222.13 28.9023 222.251 28.1422 222.251 27.3772C222.251 26.0537 221.89 24.7551 221.207 23.6202L221.171 23.5597C220.381 22.2456 219.209 21.2024 217.81 20.5682L215.754 19.6356C212.466 18.2061 208.955 17.3557 205.376 17.1222L200.828 16.8253C198.384 16.6658 195.93 16.7409 193.5 17.0493C191.282 17.331 189.13 17.9987 187.142 19.022L184.588 20.337C183.031 21.1385 181.555 22.0855 180.177 23.1651L180.068 23.2505C175.602 26.7506 171.703 30.9144 168.505 35.5963L166.397 38.6825L160.888 49.8724Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M217.111 71.3425L233.844 68.4093L226.837 85.0577L224.289 90.459L222.66 93.9102C222.049 95.2085 221.336 96.4563 220.529 97.644L218.367 100.829C217.054 102.762 215.502 104.52 213.746 106.064L210.771 108.68C209.509 109.79 208.148 110.783 206.705 111.646L202.504 114.161C198.034 116.769 193.158 118.611 188.077 119.61L186.707 119.879C184.001 120.392 181.261 120.696 178.508 120.787L177.353 120.826C173.404 120.957 169.452 120.748 165.539 120.198L163.265 119.879L160.412 119.162C157.309 118.382 154.28 117.334 151.358 116.032L149.172 115.058L145.196 112.697C143.428 111.647 141.783 110.404 140.291 108.991L139.174 107.932L136.887 105.725L135.989 104.734C134.939 103.576 133.991 102.332 133.151 101.015L132.945 100.689L132.279 99.306C131.71 98.125 131.416 96.8323 131.416 95.5225C131.416 94.6511 131.546 93.7842 131.804 92.9515L132.118 91.9292C132.665 90.1577 133.518 88.4957 134.641 87.0183L136.129 85.0577L138.885 82.3093C140.858 80.3404 143.119 78.68 145.591 77.3846L149.379 75.3991L160.717 70.6967L172.438 66.6301L189.509 62.563L206.58 59.6403L219.181 58.4566L231.649 57.9811L245.058 57.7588C245.196 57.7566 245.214 57.9567 245.078 57.9789L228.62 60.6566L218.174 62.563L208.109 65.1047L197.535 67.5197L187.853 70.6967L180.846 73.1112L170.272 78.068L167.392 79.4696C165.834 80.2276 164.355 81.1388 162.978 82.1893L162.231 82.7593C161.225 83.5268 160.305 84.4009 159.488 85.3668L159.047 85.8893C157.878 87.2705 156.99 88.8645 156.431 90.584L156.106 91.5847C155.869 92.3124 155.749 93.0726 155.749 93.8373C155.749 95.1609 156.109 96.4597 156.792 97.5942L156.828 97.655C157.618 98.9687 158.791 100.012 160.19 100.646L162.246 101.579C165.534 103.009 169.044 103.859 172.623 104.092L177.171 104.389C179.616 104.549 182.069 104.474 184.499 104.165C186.718 103.883 188.87 103.216 190.857 102.193L193.411 100.878C194.968 100.076 196.445 99.1291 197.823 98.0493L197.931 97.9641C202.397 94.4643 206.297 90.3004 209.494 85.6184L211.602 82.5321L217.111 71.3425Z"
                fill="url(#paint1_linear)"
              />
              <path
                d="M1.82959 154.269V133.829H9.00672C11.4929 133.829 13.3787 134.306 14.664 135.261C15.9493 136.206 16.5919 137.596 16.5919 139.431C16.5919 140.432 16.334 141.317 15.818 142.084C15.302 142.842 14.5843 143.399 13.6648 143.754C14.7156 144.016 15.5412 144.546 16.1416 145.341C16.7515 146.136 17.0563 147.11 17.0563 148.261C17.0563 150.226 16.4278 151.714 15.1706 152.725C13.9135 153.736 12.1215 154.251 9.79481 154.269H1.82959ZM6.05145 145.369V150.886H9.66817C10.6626 150.886 11.4366 150.652 11.9902 150.184C12.553 149.707 12.8345 149.052 12.8345 148.218C12.8345 146.347 11.8635 145.397 9.92146 145.369H6.05145ZM6.05145 142.393H9.1756C11.3053 142.356 12.3701 141.508 12.3701 139.852C12.3701 138.925 12.0981 138.261 11.5539 137.858C11.0192 137.446 10.1701 137.241 9.00672 137.241H6.05145V142.393ZM35.7451 133.829V147.292C35.7451 149.529 35.0414 151.298 33.6341 152.599C32.2363 153.9 30.3223 154.55 27.8924 154.55C25.5 154.55 23.6002 153.918 22.1929 152.655C20.7857 151.392 20.0679 149.655 20.0398 147.447V133.829H24.2616V147.32C24.2616 148.659 24.5807 149.637 25.2186 150.254C25.866 150.862 26.7572 151.167 27.8924 151.167C30.2661 151.167 31.4716 149.922 31.5091 147.433V133.829H35.7451ZM49.8319 148.907C49.8319 148.111 49.5505 147.502 48.9876 147.082C48.4246 146.651 47.4114 146.202 45.9478 145.734C44.4843 145.257 43.3256 144.789 42.4719 144.33C40.1452 143.076 38.9818 141.387 38.9818 139.262C38.9818 138.158 39.2914 137.175 39.9106 136.314C40.5392 135.444 41.4352 134.765 42.5985 134.279C43.7712 133.792 45.0847 133.548 46.5389 133.548C48.0025 133.548 49.3066 133.815 50.4511 134.348C51.5957 134.873 52.4823 135.617 53.1109 136.581C53.7489 137.545 54.0679 138.64 54.0679 139.866H49.846C49.846 138.93 49.5505 138.204 48.9594 137.69C48.3684 137.166 47.538 136.904 46.4685 136.904C45.4365 136.904 44.6344 137.123 44.0621 137.564C43.4898 137.994 43.2036 138.565 43.2036 139.276C43.2036 139.94 43.5367 140.498 44.2028 140.947C44.8783 141.396 45.8681 141.817 47.1722 142.21C49.5739 142.931 51.3236 143.825 52.4213 144.892C53.519 145.959 54.0679 147.287 54.0679 148.879C54.0679 150.647 53.397 152.037 52.0554 153.048C50.7138 154.049 48.9078 154.55 46.6374 154.55C45.0613 154.55 43.6258 154.264 42.3311 153.694C41.0364 153.113 40.0467 152.323 39.3618 151.321C38.6863 150.32 38.3485 149.16 38.3485 147.84H42.5844C42.5844 150.095 43.9354 151.223 46.6374 151.223C47.6413 151.223 48.4246 151.022 48.9876 150.619C49.5505 150.207 49.8319 149.637 49.8319 148.907ZM61.4279 154.269H57.2061V133.829H61.4279V154.269ZM82.0167 154.269H77.7944L69.5759 140.821V154.269H65.3542V133.829H69.5759L77.8088 147.306V133.829H82.0167V154.269ZM98.0312 145.411H89.9253V150.886H99.4385V154.269H85.7036V133.829H99.4102V137.241H89.9253V142.112H98.0312V145.411ZM112.54 148.907C112.54 148.111 112.259 147.502 111.696 147.082C111.133 146.651 110.12 146.202 108.656 145.734C107.192 145.257 106.034 144.789 105.181 144.33C102.854 143.076 101.69 141.387 101.69 139.262C101.69 138.158 102 137.175 102.619 136.314C103.248 135.444 104.144 134.765 105.307 134.279C106.48 133.792 107.793 133.548 109.247 133.548C110.711 133.548 112.015 133.815 113.16 134.348C114.304 134.873 115.191 135.617 115.819 136.581C116.457 137.545 116.776 138.64 116.776 139.866H112.554C112.554 138.93 112.259 138.204 111.668 137.69C111.077 137.166 110.246 136.904 109.177 136.904C108.145 136.904 107.343 137.123 106.771 137.564C106.198 137.994 105.912 138.565 105.912 139.276C105.912 139.94 106.245 140.498 106.911 140.947C107.587 141.396 108.576 141.817 109.881 142.21C112.282 142.931 114.032 143.825 115.13 144.892C116.227 145.959 116.776 147.287 116.776 148.879C116.776 150.647 116.105 152.037 114.764 153.048C113.422 154.049 111.617 154.55 109.346 154.55C107.769 154.55 106.335 154.264 105.04 153.694C103.745 153.113 102.755 152.323 102.07 151.321C101.394 150.32 101.057 149.16 101.057 147.84H105.293C105.293 150.095 106.644 151.223 109.346 151.223C110.35 151.223 111.133 151.022 111.696 150.619C112.259 150.207 112.54 149.637 112.54 148.907ZM130.272 148.907C130.272 148.111 129.991 147.502 129.428 147.082C128.865 146.651 127.852 146.202 126.388 145.734C124.925 145.257 123.766 144.789 122.912 144.33C120.585 143.076 119.422 141.387 119.422 139.262C119.422 138.158 119.731 137.175 120.351 136.314C120.979 135.444 121.875 134.765 123.039 134.279C124.211 133.792 125.525 133.548 126.979 133.548C128.443 133.548 129.747 133.815 130.891 134.348C132.036 134.873 132.923 135.617 133.551 136.581C134.189 137.545 134.508 138.64 134.508 139.866H130.286C130.286 138.93 129.991 138.204 129.4 137.69C128.808 137.166 127.978 136.904 126.909 136.904C125.877 136.904 125.074 137.123 124.502 137.564C123.93 137.994 123.644 138.565 123.644 139.276C123.644 139.94 123.977 140.498 124.643 140.947C125.319 141.396 126.308 141.817 127.612 142.21C130.014 142.931 131.764 143.825 132.862 144.892C133.959 145.959 134.508 147.287 134.508 148.879C134.508 150.647 133.837 152.037 132.496 153.048C131.154 154.049 129.348 154.55 127.077 154.55C125.502 154.55 124.066 154.264 122.771 153.694C121.477 153.113 120.487 152.323 119.802 151.321C119.127 150.32 118.789 149.16 118.789 147.84H123.025C123.025 150.095 124.375 151.223 127.077 151.223C128.082 151.223 128.865 151.022 129.428 150.619C129.991 150.207 130.272 149.637 130.272 148.907ZM159.135 137.241H152.859V154.269H148.637V137.241H142.445V133.829H159.135V137.241ZM169.141 146.787H165.778V154.269H161.556V133.829H169.17C171.59 133.829 173.457 134.367 174.77 135.444C176.084 136.52 176.741 138.041 176.741 140.006C176.741 141.401 176.436 142.566 175.826 143.502C175.225 144.428 174.311 145.168 173.081 145.72L177.514 154.073V154.269H172.983L169.141 146.787ZM165.778 143.376H169.183C170.244 143.376 171.064 143.109 171.646 142.575C172.228 142.033 172.519 141.288 172.519 140.343C172.519 139.379 172.242 138.621 171.689 138.069C171.144 137.517 170.305 137.241 169.17 137.241H165.778V143.376ZM192.291 145.411H184.185V150.886H193.698V154.269H179.963V133.829H193.67V137.241H184.185V142.112H192.291V145.411ZM212.837 154.269H208.616L200.397 140.821V154.269H196.175V133.829H200.397L208.629 147.306V133.829H212.837V154.269ZM216.524 154.269V133.829H222.829C224.63 133.829 226.239 134.236 227.656 135.051C229.082 135.856 230.194 137.007 230.991 138.504C231.789 139.992 232.187 141.686 232.187 143.586V144.527C232.187 146.427 231.793 148.116 231.005 149.595C230.226 151.073 229.124 152.22 227.698 153.034C226.272 153.848 224.663 154.26 222.871 154.269H216.524ZM220.746 137.241V150.886H222.787C224.438 150.886 225.7 150.348 226.572 149.272C227.445 148.195 227.89 146.656 227.909 144.653V143.572C227.909 141.494 227.478 139.922 226.614 138.855C225.751 137.779 224.489 137.241 222.829 137.241H220.746ZM258.532 147.46C258.372 149.66 257.556 151.392 256.083 152.655C254.62 153.918 252.687 154.55 250.285 154.55C247.658 154.55 245.589 153.67 244.079 151.911C242.578 150.142 241.827 147.718 241.827 144.639V143.389C241.827 141.424 242.174 139.693 242.868 138.195C243.563 136.698 244.553 135.552 245.838 134.756C247.133 133.951 248.634 133.548 250.341 133.548C252.705 133.548 254.61 134.18 256.055 135.444C257.5 136.707 258.335 138.481 258.56 140.764H254.338C254.235 139.444 253.864 138.49 253.226 137.9C252.598 137.301 251.636 137.002 250.341 137.002C248.934 137.002 247.878 137.507 247.175 138.518C246.48 139.52 246.124 141.078 246.105 143.193V144.737C246.105 146.946 246.438 148.56 247.105 149.58C247.78 150.6 248.84 151.111 250.285 151.111C251.589 151.111 252.56 150.816 253.198 150.226C253.845 149.627 254.216 148.706 254.31 147.46H258.532ZM278.135 144.512C278.135 146.525 277.779 148.289 277.066 149.805C276.352 151.321 275.33 152.491 273.997 153.315C272.675 154.138 271.155 154.55 269.438 154.55C267.74 154.55 266.225 154.143 264.893 153.329C263.56 152.515 262.528 151.354 261.797 149.847C261.065 148.331 260.694 146.59 260.685 144.625V143.614C260.685 141.602 261.046 139.833 261.768 138.308C262.5 136.773 263.528 135.598 264.851 134.784C266.182 133.96 267.702 133.548 269.41 133.548C271.118 133.548 272.633 133.96 273.955 134.784C275.288 135.598 276.315 136.773 277.037 138.308C277.769 139.833 278.135 141.597 278.135 143.6V144.512ZM273.857 143.586C273.857 141.443 273.473 139.814 272.703 138.701C271.934 137.587 270.836 137.03 269.41 137.03C267.993 137.03 266.9 137.582 266.131 138.686C265.362 139.782 264.973 141.391 264.963 143.516V144.512C264.963 146.6 265.348 148.218 266.117 149.37C266.886 150.521 267.993 151.096 269.438 151.096C270.855 151.096 271.943 150.545 272.703 149.44C273.463 148.326 273.848 146.707 273.857 144.583V143.586ZM286.72 133.829L291.983 148.654L297.218 133.829H302.763V154.269H298.526V148.682L298.949 139.038L293.418 154.269H290.519L285.003 139.051L285.425 148.682V154.269H281.203V133.829H286.72ZM310.671 147.067V154.269H306.449V133.829H314.443C315.981 133.829 317.333 134.11 318.496 134.671C319.669 135.233 320.57 136.033 321.198 137.072C321.827 138.101 322.141 139.276 322.141 140.596C322.141 142.599 321.451 144.18 320.072 145.341C318.702 146.492 316.802 147.067 314.372 147.067H310.671ZM310.671 143.656H314.443C315.559 143.656 316.408 143.394 316.99 142.87C317.581 142.346 317.876 141.597 317.876 140.624C317.876 139.623 317.581 138.813 316.99 138.195C316.399 137.577 315.583 137.259 314.542 137.241H310.671V143.656ZM334.117 150.058H326.715L325.307 154.269H320.818L328.445 133.829H332.357L340.027 154.269H335.538L334.117 150.058ZM327.854 146.647H332.977L330.401 138.996L327.854 146.647ZM358.603 154.269H354.382L346.163 140.821V154.269H341.941V133.829H346.163L354.396 147.306V133.829H358.603V154.269ZM368.961 143.038L373.225 133.829H377.841L371.114 146.857V154.269H366.822V146.857L360.095 133.829H364.725L368.961 143.038Z"
                fill="#4448E3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="189"
                  y1="0.191267"
                  x2="189"
                  y2="63.4808"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5F2EEA" />
                  <stop offset="0.770833" stopColor="#7586FF" />
                  <stop offset="1" stopColor="#605CFF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="189"
                  y1="121.023"
                  x2="189"
                  y2="57.7339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#057CD3" />
                  <stop offset="1" stopColor="#0295FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="left-header">
            <h1 className="text-uppercase">GMMG</h1>
            <h4 className="text-uppercase">{t(`homeFooter.Titul10`)}</h4>
          </div>
          <div className="right-header d-flex align-items-center align-content-center">
            <h4>{t(`homeFooter.Titul9`)} </h4>

            <Ripples color="rgba(255,255,255,0.5)" className="rounded-pill">
              <a href="#!">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </Ripples>

            <Ripples color="rgba(255,255,255,0.5)" className="rounded-pill">
              <a href="#!">
                {" "}
                <i className="fab fa-skype"></i>{" "}
              </a>
            </Ripples>
          </div>
        </div>

        <Row>
          <Col sm="12" md="4">
            <div className="left-box">
              <ul className="list-unstyled mt-4">
                <li>
                  {" "}
                  <i
                    className="fas fa-map-marker-alt mr-2"
                    aria-hidden="true"
                  ></i>{" "}
                  {t(`homeFooter.Titul`)}{" "}
                </li>
                <li>
                  <i className="fas fa-phone-alt mr-2" aria-hidden="true"></i>
                  +998 99 999 00 00
                </li>
                <li>
                  <i className="fas fa-mobile-alt mr-2" aria-hidden="true"></i>
                  +998 99 999 00 00
                </li>
                <li>
                  <i className="fas fa-envelope mr-2" aria-hidden="true"></i>
                  info@gmmg.world
                </li>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="4">
            <div className="mid-box">
              <h4 className="text-uppercase">{t(`homeFooter.Titul2`)}</h4>
              <ul className="list-unstyled">
                <li>{t(`homeFooter.Titul3`)}</li>
                <li>{t(`homeFooter.Titul4`)}</li>
                <li>{t(`homeFooter.Titul5`)}</li>
                <li>{t(`homeFooter.Titul6`)}</li>
                <li>{t(`homeFooter.Titul7`)}</li>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="4">
            <div className="right-box">
              <h4 className="text-uppercase">{t(`homeFooter.Titul8`)}</h4>
              <ul className="list-unstyled">
                <li>wefewfw</li>
                <li>ewfwef</li>
                <li>efwefwe</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeFooter;
