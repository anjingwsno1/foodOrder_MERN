import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 70%;
  display: block;
  background-color: #b40b24;
  margin: 0 15%;
  padding: 5px 0;
  text-align: center;
  position: fixed;
  z-index: 3;
  &.active {
    transition: all 1s;
  }
`;

export const Logo = styled.img`
  height: 100px;
  margin: 0 auto;
  &.active {
    transition: all 1s;
    height: 80px;
  }
`;

export const LinkWrapper = styled.div`
  font-size: 30px;
  margin: 20px 0 20px 0;
  border-radius: 25px;
  &:hover {
    background-color: yellow;
    transition: all 1s;
  }
`;
