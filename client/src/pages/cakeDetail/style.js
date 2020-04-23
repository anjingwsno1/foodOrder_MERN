import styled from "styled-components";

export const CakeDetailWrapper = styled.div`
  margin-top: 100px;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const CakePicBig = styled.img`
  width: 400px;
  height: 400px;
`;

export const CakePicSmall = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-left: 10px;
  &:hover {
    border: 1px solid black;
  }
`;

export const CakePicSmallWrapper = styled.div``;

export const CakeDetailPrice = styled.p`
  font-size: 16px;
  font-family: arial;
  letter-spacing: 0.8px;
  color: #f40;
  font-weight: 700;
  padding-right: 100px;
`;
export const CakeDetailRating = styled.div`
  color: #888;
  float: right;
`;
export const CakeDetailName = styled.p`
  height: 36px;
  font-weight: 400;
  font-family: Lato, Helvetica, Arial, sans-serif;
`;

export const CakeDetailDetail = styled.p`
  height: 36px;
  font-weight: 400;
  font-family: Lato, Helvetica, Arial, sans-serif;
`;
