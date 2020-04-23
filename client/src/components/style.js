import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto 0;
  padding: 5px 35%;
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
    color: black;
  }
`;

export const Logo = styled.img`
  width: 60px;
  &.active {
    width: 40px;
    transition: all 1s;
  }
`;
