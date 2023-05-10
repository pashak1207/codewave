import React, { ReactElement } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer(): ReactElement {
  return (
    <footer className="footer">
      <div className="wrapper">
        <h5>2023 © CodeWave. All rights reserved</h5>
        <div className="header__logo">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="175"
              height="175"
              viewBox="0 0 175 175"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M131 12H44C26.3269 12 12 26.3269 12 44V131C12 148.673 26.3269 163 44 163H131C148.673 163 163 148.673 163 131V44C163 26.3269 148.673 12 131 12ZM44 4C21.9086 4 4 21.9086 4 44V131C4 153.091 21.9086 171 44 171H131C153.091 171 171 153.091 171 131V44C171 21.9086 153.091 4 131 4H44Z"
                fill="#E2C3A7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.43 56.1646C48.5374 58.2004 45.0557 61.7117 42.7299 64.6916C40.6911 67.3039 36.9206 67.7687 34.3084 65.7299C31.6961 63.6911 31.2313 59.9206 33.2701 57.3084C36.2776 53.455 41.2959 48.2162 48.8199 45.0854C56.5069 41.8868 66.2204 41.1361 78.018 45.3495C85.2858 47.9452 90.8737 50.6712 95.4076 52.8831C96.2178 53.2783 96.9943 53.6571 97.7407 54.0158C102.761 56.4287 106.163 57.7938 109.933 58.1172C116.102 58.6462 122.727 55.5863 128.96 50.7442C129.864 50.0417 130.893 49.1387 132.231 47.7835C134.56 45.426 138.359 45.4027 140.717 47.7314C143.074 50.0601 143.097 53.859 140.769 56.2165C139.131 57.8742 137.712 59.1406 136.322 60.2205C129.218 65.7391 119.565 70.9872 108.908 70.0733C102.776 69.5474 97.6601 67.291 92.5428 64.8316C91.7256 64.4389 90.9008 64.037 90.0607 63.6276C85.5398 61.4244 80.5763 59.0056 73.982 56.6505C64.7796 53.3639 58.1598 54.1965 53.43 56.1646Z"
                fill="#4591AE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.43 87.7296C48.5374 89.7655 45.0557 93.2767 42.7299 96.2567C40.6911 98.8689 36.9206 99.3338 34.3084 97.295C31.6961 95.2561 31.2313 91.4857 33.2701 88.8734C36.2776 85.02 41.2959 79.7813 48.8199 76.6505C56.5069 73.4519 66.2204 72.7012 78.018 76.9146C85.2858 79.5102 90.8737 82.2363 95.4076 84.4481C96.2178 84.8433 96.9943 85.2222 97.7407 85.5809C102.761 87.9938 106.163 89.3589 109.933 89.6822C116.102 90.2113 122.727 87.1513 128.96 82.3093C129.864 81.6067 130.893 80.7038 132.231 79.3485C134.56 76.991 138.359 76.9677 140.717 79.2965C143.074 81.6252 143.097 85.4241 140.769 87.7816C139.131 89.4393 137.712 90.7056 136.322 91.7855C129.218 97.3042 119.565 102.552 108.908 101.638C102.776 101.112 97.6601 98.856 92.5428 96.3967C91.7256 96.004 90.9008 95.602 90.0607 95.1926C85.5398 92.9895 80.5763 90.5706 73.982 88.2155C64.7796 84.929 58.1598 85.7615 53.43 87.7296Z"
                fill="#4591AE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.43 119.73C48.5374 121.765 45.0557 125.277 42.7299 128.257C40.6911 130.869 36.9206 131.334 34.3084 129.295C31.6961 127.256 31.2313 123.486 33.2701 120.873C36.2776 117.02 41.2959 111.781 48.8199 108.65C56.5069 105.452 66.2204 104.701 78.018 108.915C85.2858 111.51 90.8737 114.236 95.4076 116.448C96.2178 116.843 96.9943 117.222 97.7407 117.581C102.761 119.994 106.163 121.359 109.933 121.682C116.102 122.211 122.727 119.151 128.96 114.309C129.864 113.607 130.893 112.704 132.231 111.349C134.56 108.991 138.359 108.968 140.717 111.296C143.074 113.625 143.097 117.424 140.769 119.782C139.131 121.439 137.712 122.706 136.322 123.786C129.218 129.304 119.565 134.552 108.908 133.638C102.776 133.112 97.6601 130.856 92.5428 128.397C91.7256 128.004 90.9008 127.602 90.0607 127.193C85.5398 124.989 80.5763 122.571 73.982 120.216C64.7796 116.929 58.1598 117.762 53.43 119.73Z"
                fill="#4591AE"
              />
            </svg>
            <h1>codewave</h1>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
