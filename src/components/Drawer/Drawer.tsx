import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Content, Item } from "./styles";
import { Link } from "react-router-dom";

type OptionsDrawerPropTypes = {
  open: boolean;
  toggleDrawer: () => void;
};

export default function OptionsDrawer({
  open,
  toggleDrawer,
}: OptionsDrawerPropTypes) {
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Box
        sx={{ width: "85vw" }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <Content>
          <a href="/#">
            <Item>
              <Typography variant="h5">Home</Typography>
            </Item>
          </a>

          <a href="#ablauf">
            <Item>
              <Typography variant="h5">Ablauf</Typography>
            </Item>
          </a>

          <a href="#vorteile">
            <Item>
              <Typography variant="h5">Vorteile</Typography>
            </Item>
          </a>

          <a href="#submit-request" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large">
              Angebot einholen
            </Button>
          </a>
        </Content>
      </Box>
    </Drawer>
  );
}
