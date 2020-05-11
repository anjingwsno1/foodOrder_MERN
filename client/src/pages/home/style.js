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
  width: 100%;
  position: relative;
  padding-top: 110px;
`;

export const ManyImg = styled.img`
  width: 100%;
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
export const SmallImgWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 35% 5% 5% 60%;
`;

export const SmallImg = styled.img`
  width: 30%;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
    transition: all 0.2s;
  }
`;

export const ContactImg = styled.img`
  width: 250px;
  margin: 0 auto;
`;
export const ContactText = styled.p`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`;
export const ContactPhoneWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;
export const ContactTitle = styled.p`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`;
export const ContactPhone = styled.p`
  text-align: center;
`;
