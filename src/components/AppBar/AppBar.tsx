import React, { useState } from "react";
import { Header, NavBar, LogoImage, CustomButton } from "./styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import NavLink from "../NavLink/NavLink";

export const AppBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Header>
      <NavBar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <a href="/#">
            <LogoImage alt="CompanyLogo" src={logo} />
          </a>

          <Grid item>
            <Stack direction="row" columnGap={4} sx={{ cursor: "pointer" }}>
              <NavLink
                href="/#"
                linkName="home"
                activeLink={activeLink}
                handleLinkClick={handleLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                href="#ablauf"
                linkName="ablauf"
                activeLink={activeLink}
                handleLinkClick={handleLinkClick}
              >
                Ablauf
              </NavLink>
              <NavLink
                href="#vorteile"
                linkName="vorteile"
                activeLink={activeLink}
                handleLinkClick={handleLinkClick}
              >
                Vorteile
              </NavLink>
              <NavLink
                href="#faq"
                linkName="faq"
                activeLink={activeLink}
                handleLinkClick={handleLinkClick}
              >
                FAQ
              </NavLink>
            </Stack>
          </Grid>
          <a href="#form" style={{ textDecoration: "none" }}>
            <CustomButton>Angebot einholen</CustomButton>
          </a>
        </Grid>
      </NavBar>
    </Header>
  );
};
