import { Img } from "react-image";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const MessageSection = styled(Box)`
  padding: 16px 160px;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const InfoBox = styled(Box)`
  border-radius: 24px;
  padding: 24px;
  border: 1px solid #8797db;
  background: #dfe3f6;
  color: #0a1f7b;

  @media screen and (max-width: 768px) {
    width: 348px;
    padding: 24px;
  }
`;

export const Title = styled(Typography)`
  font-family: Macan;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const Description = styled(Typography)`
  font-family: Macan;
  font-size: 16px;
  line-height: 24px;

  gap: 24px;
  padding: 10px 0px 20px 0px;
  margin-bottom: 20px;
`;

export const IconImage = styled(Img)`
  width: 30px;
  height: 30px;
`;
