import { Img } from "react-image";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Header = styled(Box)`
  font-family: Macan;
  height: 77px;
  position: sticky;
  top: 0;
  z-index: 3;
  background: #ffffff;

  @media screen and (max-width: 1026px) {
    display: none;
  }
`;

export const NavBar = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
  height: 45px;
  padding: 16px 160px;
  font-size: 16px;
  gap: 10px;

  a {
    text-decoration: none;
  }

  a: hover {
    color: blue;
  }
`;

export const LogoImage = styled(Img)`
  display: flex;
  justify-content: center;
align-items: center
  width: 202px;
  height: 45px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const CustomButton = styled(Button)`
  width: 172px;
  height: 44px;
  border-radius: 12px;
  boder: 1px solid #0f2fb8;
  color: #ffffff;
  background:#0F2FB8;  
  &:hover {
    background: #0f2fd8;
  }

  @media screen and (max-width: 768px) {
    display: none;
`;
