import React, { useState } from "react";
import { Header, NavBar, LogoImage, CustomButton } from "./styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const AppBar = () => {
  const [activeLink, setActiveLink] = useState("");

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
              <a
                href="/#"
                onClick={() => handleLinkClick("home")}
                style={{
                  fontWeight: activeLink === "home" ? "bold" : "normal",
                  color: activeLink === "home" ? "blue" : "inherit",
                }}
              >
                <Typography variant="body1">Home</Typography>
              </a>
              <a
                href="#ablauf"
                onClick={() => handleLinkClick("ablauf")}
                style={{
                  fontWeight: activeLink === "ablauf" ? "bold" : "normal",
                  color: activeLink === "ablauf" ? "blue" : "inherit",
                }}
              >
                <Typography variant="body1">Ablauf</Typography>
              </a>
              <a
                href="#vorteile"
                onClick={() => handleLinkClick("vorteile")}
                style={{
                  fontWeight: activeLink === "vorteile" ? "bold" : "normal",
                  color: activeLink === "vorteile" ? "blue" : "inherit",
                }}
              >
                <Typography variant="body1">Vorteile</Typography>
              </a>
              <a
                href="#faq"
                onClick={() => handleLinkClick("faq")}
                style={{
                  fontWeight: activeLink === "faq" ? "bold" : "normal",
                  color: activeLink === "faq" ? "blue" : "inherit",
                }}
              >
                <Typography variant="body1">FAQ</Typography>
              </a>
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
