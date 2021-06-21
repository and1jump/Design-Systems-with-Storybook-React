import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.1428 1.55776C26.2742 0.697426 24.8669 0.697426 23.9983 1.55776L13.8965 11.5788L3.79602 1.55776C2.92739 0.696074 1.52011 0.697426 0.651477 1.55776C-0.217159 2.41945 -0.217159 3.81546 0.651477 4.67715L10.7519 14.6982L0.651477 24.7178C-0.217159 25.5795 -0.217159 26.9769 0.651477 27.8385C1.08511 28.2687 1.65511 28.4838 2.22375 28.4838C2.79239 28.4838 3.36102 28.2687 3.79602 27.8385L13.8965 17.8175L23.9983 27.8385C24.4333 28.2687 25.0006 28.4838 25.5706 28.4838C26.1406 28.4838 26.7078 28.2687 27.1428 27.8385C28.0101 26.9769 28.0101 25.5795 27.1428 24.7178L17.041 14.6982L27.1428 4.67715C28.0101 3.81546 28.0101 2.41945 27.1428 1.55776Z"
        fill="#4A4B53"
      />
    </svg>
  </CloseIconWrapper>
);
