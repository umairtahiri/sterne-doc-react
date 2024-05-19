import { Img } from "react-image";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Vector from "../../assets/content-section.svg";

export const RemoveNegativeSection = styled(Box)`
  background-image: url("${Vector}");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: Macan;
  padding: 120px 160px;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const Title = styled(Typography)`
  color: #ffffff;
  font-size: 48px;
  font-weight: 600;
  line-height: 67.2px;
  letter-spacing: -0.02em;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const WelcomeNote = styled(Typography)`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
  }
`;

export const ItemDetail = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 16px auto;
  color: #ffffff;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
  }
`;

export const IconImage = styled(Img)`
  align-items: center;
  width: 50px;
  height: 50px;
  padding-right: 24px;
  margin-bottom: 20px;
`;

export const ImageFrame = styled(Img)`
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
