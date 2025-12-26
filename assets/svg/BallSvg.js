import React from "react";

const BallSvg = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.0018 20.1726C70.4945 17.423 69.1368 14.8538 67.1238 12.8333C65.1028 10.821 62.5328 9.46392 59.7825 8.95648C45.7928 6.62688 31.0951 10.8693 20.9963 20.9515C10.8998 31.0314 6.63483 45.718 8.94829 59.707C9.45579 62.4567 10.8133 65.026 12.8262 67.0464C14.8473 69.0587 17.4174 70.4157 20.1678 70.9234C34.0708 73.579 48.9985 69.0087 58.9722 58.931C69.1652 48.9094 73.4302 34.1654 71.0018 20.1726Z"
        stroke="#141B34"
        strokeWidth={5}
      />
      <path
        d="M13.334 66.6673L66.6673 13.334"
        stroke="#141B34"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 40L40 50M40 30L50 40"
        stroke="#141B34"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BallSvg;
