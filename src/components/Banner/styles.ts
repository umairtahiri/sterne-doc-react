import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Ellipse from "../../assets/Ellipse.svg";

export const BannerSection = styled(Box)`
  font-family: Macan;
  height: auto;
`;

export const Container = styled(Box)``;

export const ContainerGrid = styled(Box)`
  @media screen and (min-width: 768px) {
    padding: 100px 240px 40px 240px;
  }

  @media screen and (max-width: 1080px) {
    padding: 80px 10px 0px 10px;
  }
`;

export const Title = styled(Typography)`
  font-size: 60px;
  font-weight: bold;
  line-height: 72px;
  letter-spacing: -0.02em;
  text-align: center;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 24px;
  color: #0a1f7b;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    font-weight: 600;
    line-height: 57.6px;
    letter-spacing: -0.02em;
    text-align: center;
  }
`;

export const Description = styled(Typography)`
  padding-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const CustomButton = styled(Button)`
  display: block;
  margin: auto;
  width: 173px;
  height: 44px;
  border-radius: 12px;
  margin-bottom: 32px;
  color: #ffffff;
  background: #0f2fb8;
  &:hover {
    background: #0f2fd8;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 34px;
  }
`;

export const BannerImage = styled(Box)`
  background-image: url(${Ellipse});
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;

  img {
    display: block;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    background-size: contain;
    height: 200px;
  }

  @media screen and (max-width: 1160px) {
    height: 250px;
    background-size: cover;

    img {
      width: 100%;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 454px) {
    background-size: contain;
  }
`;

export const UnionImage = styled(Box)`
  position: absolute;
  top: 120px;
  z-index: -1;

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 100px;

    img {
      width: 100%;
    }
  }
`;
