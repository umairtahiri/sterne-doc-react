import React from "react";
import { Header, NavBar, LogoImage, CustomButton } from "./styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const AppBar = () => {
  return (
    <Header>
      <NavBar>
        <Grid container direction="row" justifyContent="space-between">
          <LogoImage alt="CompanyLogo" src={logo} />
          <Grid item>
            <Stack direction="row" columnGap={4} sx={{ cursor: "pointer" }}>
              <Link to="/#">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link to="/#ablauf">
                <Typography variant="body1">Ablauf</Typography>
              </Link>
              <Link to="/#vorteile">
                <Typography variant="body1">Vorteile</Typography>
              </Link>
              <Link to="/#faq">
                <Typography variant="body1">FAQ</Typography>
              </Link>
            </Stack>
          </Grid>
          <CustomButton>Angebot einholen</CustomButton>
        </Grid>
      </NavBar>
    </Header>
  );
};
