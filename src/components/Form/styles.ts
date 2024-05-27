import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styled from "styled-components";

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: 24px;
  background: #fff;
  width: 100%;
  padding: 32px;
  align-items: flex-start;
  box-shadow: 0px 24px 32px 0px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 1100px) {
    width: 95%;
    padding: 24px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 24px;
  }

  @media screen and (min-width: 455px) and (max-width: 767px) {
    width: 95%;
    padding: 24px;
  }
`;

export const Row = styled(Box)`
  width: 100%;
`;

export const FormLabel = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: #4d5761;
`;

export const StyledInput = styled(TextField)`
  border-radius: 8px;
  border: 1px solid #e2e4e9;
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
    margin: 0;
  }
`;
