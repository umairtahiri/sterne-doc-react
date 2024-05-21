import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { Img } from "react-image";
import logo from "../../assets/logo.svg";
import IconPhone from "../../assets/phone-Icon.svg";
import IconEmail from "../../assets/mail-Icon.svg";

import {
  FooterBox,
  FooterSection,
  Title,
  Description,
  MailInfo,
  PhoneInfo,
  LogoImage,
  IconImage,
  InputBox,
  CopyRight,
  CustomButton,
  CopyRightBox,
  Links,
  Border,
} from "./styles";

const Banner = () => {
  return (
    <FooterSection>
      <FooterBox>
        <Grid container columnSpacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <LogoImage src={logo} alt="Logo" />
            <Description>
              Enhance Your Reputation with Improved Google Reviews!
            </Description>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6.5}>
            <Grid container xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={12} sm={12} md={12} lg={5}>
                <Title>Information</Title>

                <Stack direction="row" columnGap={2} alignItems="center">
                  <IconImage src={IconEmail} alt="IconEmail" />
                  <MailInfo>mail@sterndoc.com</MailInfo>
                </Stack>

                <Stack marginBottom={10}>
                  <Stack direction="row" columnGap={2} alignItems="center">
                    <IconImage src={IconPhone} alt="IconPhone" />
                    <PhoneInfo>+123-456-7890</PhoneInfo>
                  </Stack>
                </Stack>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={7}
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
              >
                <Title>Subscribe the Newsletter</Title>
                <InputBox>
                  <Img src={IconEmail} width={16} alt="IconEmail" />
                  <input type="text" placeholder="Enter Email" />
                </InputBox>

                <CustomButton>Subscribe</CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} md={12} justifyContent="space-between">
          <Border />
          <CopyRight>© 2024 Sternedoc. All rights reserved.</CopyRight>

          <CopyRightBox justifyContent="space-between">
            <Stack columnGap={3} flexDirection="row">
              <Links>Terms</Links>
              <Links>Privacy</Links>
              <Links>Cookies</Links>
            </Stack>
          </CopyRightBox>
        </Grid>
      </FooterBox>
    </FooterSection>
  );
};

export default Banner;
