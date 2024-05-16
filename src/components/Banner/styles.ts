import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Img } from "react-image";

export const BannerSection = styled(Box)`
  height: 746px;
  padding: 64px 24px;
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const BannerBox = styled(Box)`
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 24px;
  color: #0a1f7b;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled(Box)`
  position: absolute;
  top: 180px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerGrid = styled(Box)`
  width: 819px;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled(Typography)`
  font-size: 60px !important;

  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    line-height: 57.6px;
    letter-spacing: -0.02em;
  }
`;

export const Description = styled(Typography)`
  padding: 20px 0px;
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
    margin-bottom: 1px;
  }
`;

export const BannerImage = styled(Img)`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const UnionImage = styled(Img)`
  position: absolute;
  top: 100px;
  width: 100%;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 50px;
    width: 100%;
    object-fit: contain;
    width: 100%;
  }
`;
