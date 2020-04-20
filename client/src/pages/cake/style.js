import styled, { keyframes } from "styled-components";
import img from "../../sources/wedding1.jpg";

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
