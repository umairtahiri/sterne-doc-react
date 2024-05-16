import { Img } from "react-image";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const RemoveNegativeSection = styled(Box)`
  font-family: Macan;
  padding: 120px 160px;
  color: #ffffff;
  background: #0f2fb8;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const Title = styled(Typography)`
  font-size: 48px;
  font-weight: 600;
  line-height: 67.2px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 24px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 50.4px;
  }
`;

export const WelcomeNote = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 24px;
  z-index: 1;

  @media screen and (max-width: 768px) {
  }
`;

export const ItemDetail = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #ffffff;
  z-index: 1;

  @media screen and (max-width: 768px) {
    line-height: 24px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const IconImage = styled(Img)`
  align-items: center;
  width: 50px;
  height: 50px;
  padding-right: 24px;
`;

export const ImageFrame = styled(Img)`
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
