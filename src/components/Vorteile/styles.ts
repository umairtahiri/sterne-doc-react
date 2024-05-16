import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Img } from "react-image";

export const VorteileSection = styled(Box)`
  padding: 80px 160px;
  font-family: Macan;

  @media screen and (max-width: 768px) {
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
`;

export const VorteileContainer = styled(Box)``;
export const BoxLeft = styled(Box)`
  @media screen and (max-width: 768px) {
  }
`;

export const BoxRight = styled(Box)`
  @media screen and (max-width: 768px) {
  }
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

export const ItemTitle = styled(Typography)`
  font-size: 20px;
  color: #384250;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`;

export const Description = styled(Typography)`
  padding: 20px 0px;
  font-size: 16px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const PhoneImage = styled(Img)`
  @media screen and (max-width: 768px) {
    width: 315.8px;
    height: 621.46px;
    left: 16.1px;
    gap: 0px;
    opacity: 0px;
  }
`;

/*


export const ItemTitle = styled(Typography)<{ orientation: string }>`
  font-size: 20px;
  color: #384250;
  font-weight: bold;
  text-align: ${(props) => (props?.orientation === "right" ? "left" : "right")};

  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`;

export const Description = styled(Typography)<{ orientation: string }>`
  padding: 20px 0px;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: ${(props) => (props?.orientation === "right" ? "left" : "right")};

  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;


*/
