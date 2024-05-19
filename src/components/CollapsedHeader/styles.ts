import styled from "styled-components";
import Box from "@mui/material/Box";
import { Img } from "react-image";

export const HeaderContainer = styled(Box)`
  position: sticky;
  top: 0px;
  z-index: 3;
  padding: 15px;
  width: -webkit-fill-available;
  background: white;
  box-shadow: 0px 8px 12px -4px #52586626;

  img {
    object-fit: contain;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  @media screen and (min-width: 998px) {
    display: none !important;
  }
`;

export const Logo = styled(Img)`
  width: 150px;
  object-fit: contain;
`;

export const Menu = styled(Box)`
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  float: right;
`;

export const BlueStar = styled(Img)`
  position: absolute;
  left: -55px;
  top: -100px;
  height: 200px;
  animation: blimp 2s ease infinite;
  object-fit: contain; 
  @keyframes blimp {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(40px);
  }

  100% {
    transform: translateY(0);
  }
`;
