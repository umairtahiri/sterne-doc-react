import styled from "styled-components";
import Box from "@mui/material/Box";

export const HeaderContainer = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 5;
  width: -webkit-fill-available;
  display: flex;
  background: linear-gradient(180deg, #e7f0ed 0%, #fff 183%);
  padding: 24px 160px;

  .MuiStack-root {
    border-radius: 24px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.2);
  }

  @media only screen and (min-width: 768px) and (max-width: 1140px) {
    padding: 0px 24px;
  }

  img {
    object-fit: contain;
    padding-left: 16px;
  }

  a {
    text-decoration: none;
  }

  h2 {
    text-decoration: none;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #384250;
    padding: 26px 0px;
    border-bottom: 3px solid transparent;

    &:hover {
      color: #5a9e87;
      border-bottom: 3px solid #5a9e87;
    }
  }

  button {
    background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;
    margin-right: 16px;

    &:hover {
      background-color: #4b8471;
    }
  }

  @media screen and (max-width: 998px) {
    display: none !important;
  }
`;

export const NavItemsContainer = styled(Box)`
  .MuiStack-root {
    border-radius: 24px;
    border: 0px solid #fff;
    background: rgba(255, 255, 255, 0.2);
  }
`;
