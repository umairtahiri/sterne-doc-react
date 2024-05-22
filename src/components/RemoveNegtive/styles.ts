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

  @media screen and (max-width: 454px) {
    padding: 80px 24px 24px 24px;
  }

  @media screen and (min-width: 455px) and (max-width: 767px) {
    padding: 120px 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 88px 64px;
  }

  @media screen and (min-width: 1081px) and (max-width: 1100px) {
    padding: 84px;
  }
`;

export const Title = styled(Typography)`
  color: #ffffff;
  font-size: 48px;
  font-weight: 600;
  line-height: 67.2px;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const WelcomeNote = styled(Typography)`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
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
    height: auto;
    margin-bottom: 20px;
  }
`;
