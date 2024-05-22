import { Img } from "react-image";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const FooterSection = styled(Box)`
  padding: 16px 160px;
  font-family: Macan;
  padding-bottom: 24px;

  @media screen and (max-width: 1100px) {
    padding: 16px 80px;
  }

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const FooterBox = styled(Box)`
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Description = styled(Typography)`
  color: #4d5761;
  margin-bottom: 40px;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 32px 0px 24px 0px;
  }
`;

export const Links = styled(Typography)`
  color: #4d5761;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Title = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  line-height: 28px;
  padding-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const LogoImage = styled(Img)`
  width: 200px;
  height: 45px;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    display: block;
    margin: auto;
  }
`;

export const MailInfo = styled(Typography)`
  font-size: 14px;
  line-height: 28px;
  color: #4d5761;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PhoneInfo = styled(Typography)`
  font-size: 14px;
  line-height: 28px;
  color: #4d5761;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IconImage = styled(Img)`
  width: 20px;
  height: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputBox = styled(Box)`
  display: flex;
  max-width: 314px;
  height: 44px;
  font-size: 16px;
  border-radius: 80px;
  color: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px 0px #1018280d;
  margin-bottom: 18px;
  width: 100%;

  input {
    appearance: none;
    border: none;
    background: none;
    padding-left: 10px;
    width: 100%;
    outline: none;
  }

  img {
    padding-left: 10px;
  }

  @media screen and (max-width: 456px) {
    width: 100%;
    display: flex;
  }
`;

export const CustomButton = styled(Button)`
  display; flex;
  max-width: 314px;
  font-size: 16px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid #0F2FB8;
  color: #ffffff;
  background: #0f2fb8;
  width: 100%;
  margin-bottom: 12px;

  &:hover {
    background:  #0f2fd8;
  }
`;

export const CopyRightBox = styled(Typography)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    margin: auto;
  }
`;

export const CopyRight = styled(Typography)`
  color: #4d5761;

  @media screen and (max-width: 768px) {
    display: block;
    margin: auto;
    font-size: 14px;
  }
`;

export const Border = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 24px;
  width: 100%;
`;
