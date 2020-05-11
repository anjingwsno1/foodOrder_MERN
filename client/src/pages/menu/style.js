import styled, { keyframes } from "styled-components";

export const MenuWrapper = styled.div`
  width: 80%;
  position: relative;
  padding-top: 130px;
  margin: 50px auto;
`;
export const CategoryWrapper = styled.div``;
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
  background-color: red;
`;
export const FoodImg = styled.img``;
export const FoodName = styled.p``;
export const FoodPrice = styled.p``;
export const OrderButton = styled.div``;
