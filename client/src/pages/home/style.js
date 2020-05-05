import styled, { keyframes } from "styled-components";
import img from "../../sources/wedding1.jpg";

const AutoChange = keyframes`
30%{opacity:1;}
60%{opacity:0;}
`;

export const BackgroundImg = styled.div`
  background-image: url(${img});
  position: absolute;
  display: block;
  width: 100%;
  width: calc(100% + 1px);
  height: 100%;
  height: calc(100% + 1px);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: visible;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 2;
`;

export const HomeImgWrapper = styled.div`
  width: 70%;
  height: 400px;
  position: absolute;
  left: 5;
  margin: 200px 15%;
`;

export const ManyImg = styled.img`
  position: absolute;
  animation: ${AutoChange} 15s infinite;

  :nth-child(3) {
    animation-delay: 0s;
  }
  :nth-child(2) {
    animation-delay: 5s;
  }
  :nth-child(1) {
    animation-delay: 10s;
  }
`;
