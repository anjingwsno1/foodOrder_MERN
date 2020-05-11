import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: block;
  background-color: #b40b24;
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

export const FooterWrapper = styled.div`
  display: block;
  position: relative;
  background-color: #d8d8d8;
`;
export const FooterText = styled.p`
  color: #737373;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  padding: 15px;
`;
