import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
  Input,
  CustomButton,
  CopyRightBox,
  Links,
} from "./styles";

const Banner = () => {
  return (
    <FooterSection>
      <FooterBox>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <LogoImage src={logo} alt="Logo" />
            <Description>
              Enhance Your Reputation with Improved Google Reviews!
            </Description>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Title>Information</Title>
            <Stack direction="row">
              <IconImage src={IconEmail} alt="IconEmail" />
              <MailInfo>mail@sterndoc.com</MailInfo>
            </Stack>
            <Stack direction="row">
              <IconImage src={IconPhone} alt="IconPhone" />
              <PhoneInfo>+123-456-7890</PhoneInfo>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Title>Subscribe the Newsletter</Title>

            <Input type="text" placeholder="Enter Email" />

            <CustomButton>Subscribe</CustomButton>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          justifyContent="space-between"
          marginTop={10}
          borderTop={1}
        >
          <Typography>© 2024 Sternedoc. All rights reserved.</Typography>

          <CopyRightBox justifyContent="space-between">
            <Links>Terms</Links>
            <Links>Privacy</Links>
            <Links>Cookies</Links>
          </CopyRightBox>
        </Grid>
      </FooterBox>
    </FooterSection>
  );
};

export default Banner;
