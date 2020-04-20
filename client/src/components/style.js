import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: block;
  margin: 10px auto 0;
  padding: 0 35%;
  text-align: center;
  position: fixed;
  z-index: 3;
  &.active {
    background-color: white;
    transition: all 1s;
    .breadCrumbs {
      color: black;
    }
  }
  .breadCrumbs {
    color: white;
  }
`;

export const Logo = styled.img`
  width: 60px;
  &.active {
    width: 40px;
    transition: all 1s;
  }
`;
