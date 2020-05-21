import styled, { keyframes } from "styled-components";

export const MenuWrapper = styled.div`
  width: 80%;
  position: relative;
  padding-top: 130px;
  margin: 0 auto;
  margin-bottom: 50px;
`;
export const CategoryWrapper = styled.div`
  margin-top: 50px;
`;
export const MenuTitle = styled.p`
  font-size: 28px;
  font-family: "National2-Bold";
  font-weight: normal;
  padding-left: 12px;
`;
export const MenuList = styled.div``;
export const MenuItem = styled.div`
  font-size: 19px;
  padding-top: 8px;
  padding-bottom: 11px;
  padding-left: 12px;
  border-bottom: 1px solid #ababab;
  &:hover {
    background-color: red;
    transition: 0.1s all;
  }
`;
export const FoodWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const FoodItemWrapper = styled.div`
  &.show {
    display: block;
  }
  &.hidden {
    display: none;
  }
`;
export const FoodImg = styled.img`
  width: 100%;
`;
export const FoodName = styled.p`
  font-family: "National2-Bold";
  font-size: 16px;
  font-weight: bold;
`;
export const FoodPrice = styled.p``;
export const OrderButton = styled.div`
  background-color: red;
  border-radius: 3px;
  width: 60%;
  margin: 0 20%;
  padding: 5px 0;
  font-family: FontAwesome;
  font-size: 17px;
  color: white;
  text-transform: uppercase;
`;
