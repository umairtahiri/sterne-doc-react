import { Img } from "react-image";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const FooterSection = styled(Box)`
  padding: 16px 160px;
  font-family: Macan;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const FooterBox = styled(Box)`
  padding: 24px;
`;

export const Description = styled(Typography)`
  color: #4d5761;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }
`;

export const Links = styled(Typography)`
  color: #4d5761;
  margin-bottom: 40px;
  margin-right: 16px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const MailInfo = styled(Typography)`
  font-size: 18px;
  line-height: 28px;
  color: #4d5761;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PhoneInfo = styled(Typography)`
  font-size: 18px;
  line-height: 28px;
  color: #4d5761;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const LogoImage = styled(Img)`
  width: 180px;
  height: 45px;
`;

export const IconImage = styled(Img)`
  padding: 4px 8px 0px 2px;
`;

export const Input = styled.input`
  position: relative;
  width: 314px;
  height: 44px;
  border-radius: 80px;
  color: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px 0px #1018280d;
  margin-bottom: 18px;

  @media screen and (max-width: 768px) {
    width: 348px;
    font-size: 16px;
  }
`;

export const CustomButton = styled(Button)`
  display; flex;
  width: 320px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid #0F2FB8;
  color: #ffffff;
  background: #0f2fb8;
  &:hover {
    background:  #0f2fd8;
  }

  @media screen and (max-width: 768px) {
    width: 348px;
    font-size: 16px;
  }
`;

export const CopyRightBox = styled(Typography)`
  display: flex;
  flex-direction: row;
  color: #4d5761;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
