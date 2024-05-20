import { Typography } from "@mui/material";
import { Img } from "react-image";
import styled from "styled-components";
import Box from "@mui/material/Box";

export const AblaufSection = styled(Box)`
  padding: 120px 140px;

  @media screen and (max-width: 767px) {
    padding: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 24px;
  }

  @media screen and (min-width: 1081px) and (max-width: 1100px) {
    padding: 40px;
  }
`;

export const AblaufContainer = styled(Box)`
  font-family: Macan;
`;

export const Title = styled(Typography)`
  font-size: 48px;
  font-weight: 600;
  line-height: 72px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #0a1f7b;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const ItemContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ItemTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
  line-height: 44.8px;
  text-align: left;
  color: #1f2a37;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 24px 0px;
  }
`;

export const Description = styled(Typography)`
  font-size: 16px;
  line-height: 24px;
  text-align: right
  color: #6C737F;
  padding: 10px 0px 20px 0px;
  margin-bottom: 20px;
`;

export const CountImage = styled(Img)`
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const StarImage = styled(Box)`
  height: auto;

  @media screen and (max-width: 504px) {
    img {
      width: 300px;
    }
  }

  @media screen and (max-width: 346px) {
    padding: 2px;
    img {
      width: 250px;
    }
  }
`;
