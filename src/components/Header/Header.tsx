import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { HeaderContainer, NavItemsContainer } from "./styles";
import CompanyLogo from "@assets/Logo.svg";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import Button from "@mui/material/Button";

export const Header = () => {
  // const { width } = useWindowSize();

  return (
    <HeaderContainer>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="-webkit-fill-available"
      >
        <NavItemsContainer>
          <Link to="/">
            <Stack direction="row" columnGap={2} sx={{ cursor: "pointer" }}>
              <Img alt="CompanyLogo" src={CompanyLogo} width={163} />
            </Stack>
          </Link>
        </NavItemsContainer>

        <NavItemsContainer>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Link to="/#home">
              <Box>
                <Typography variant="h2" whiteSpace="nowrap">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to="/delete-reviews">
              <Box>
                <Typography variant="h2" whiteSpace="nowrap">
                  Bewertungen Löschen
                </Typography>
              </Box>
            </Link>
            <Link to="/#OnlineShop">
              <Box>
                <Typography variant="h2" whiteSpace="nowrap">
                  Online Shop
                </Typography>
              </Box>
            </Link>
            <Link to="/#Angeboteinholen">
              <Box>
                <Button variant="contained" size="large">
                  Angebot einholen
                </Button>
              </Box>
            </Link>
          </Stack>
        </NavItemsContainer>
      </Stack>
    </HeaderContainer>
  );
};
