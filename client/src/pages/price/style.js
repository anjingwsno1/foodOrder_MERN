import styled from "styled-components";
import img from "../../sources/price1.jpeg";

export const PriceWrapper = styled.div`
  margin-top: 100px;
  position: absolute;
  text-align: center;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const PriceTitle = styled.p`
  letter-spacing: 2px;
  font-size: 34px;
  font-weight: 600;
  margin-top: 100px;
  color: white;
`;
