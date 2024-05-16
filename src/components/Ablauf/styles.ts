import { Typography } from "@mui/material";
import { Img } from "react-image";
import styled from "styled-components";
import Box from "@mui/material/Box";

export const AblaufSection = styled(Box)`
  padding: 120px 160px;

  @media (max-width: 1200px) {
    padding: 24px;
  }
`;

export const AblaufContainer = styled(Box)`
  font-family: Macan;

  @media (max-width: 1200px) {
    padding: 24px;
  }
`;

export const Title = styled(Typography)`
  font-size: 48px;
  font-weight: 600;
  line-height: 72px;
  letter-spacing: -0.02em;
  text-align: center;
  color: @0a1f7b;
`;

export const ItemTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
  line-height: 44.8px;
  text-align: left;
  color: #1f2a37;
`;

export const Description = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: right
  color: #6C737F;
  padding: 10px 0px 20px 0px;
  margin-bottom: 20px;
`;

export const CountImage = styled(Img)`
  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 20px;
  }
`;

export const StarImage = styled(Img)`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
