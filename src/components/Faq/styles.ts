import styled from "styled-components";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";

export const FaqContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(0deg, #ffffff 0%, #e0e4f3 100%);
  padding: 120px 24px 120px 24px;
  height: auto;

  & .container {
    border-radius: 16px;
    opacity: 0px;
    color: #ffffff;
    font-size: 19px;
    gap: 0;
    box-shadow: 0px 16px 24px 0px #00000026;
  }

  @media screen and (max-width: 998px) {
    .container {
      width: fit-content;
      order-radius: 16px;
      opacity: 0px;
      color: #ffffff;
      font-size: 19px;
      gap: 0;
      box-shadow: 0px 16px 24px 0px #00000026;
    }
  }
`;

export const FaqAccordion = styled(Accordion)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  gap: 10px;
  opacity: 0px;
  transition: height 0.3s ease, max-height 0.3s ease;

  & .question {
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    color: #1f2a37;
    font-size: 16px;
    font-weight: bold;

    @media screen and (max-width: 1080px) {
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
    }

    & .answer {
      width: 100%;
      opacity: 0;
      transition: opacity 0.3s ease;
      box-shadow: 0px 16px 24px 0px #00000026;
    }

    &.Mui-expanded {
      margin: 16px 0;
      margin-top: 16px;
      margin-bottom: 16px;
      background: #fafafa;
      border-radius: 15px;
      max-height: none;
    }

    &.Mui-expanded .answer {
      opacity: 1;
    }
  }
  &.Mui-expanded .question {
    color: #3752c4;
  }
`;
