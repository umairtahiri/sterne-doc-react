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
          <Link to="/">
            <Item>
              <Typography variant="h5">Home</Typography>
            </Item>
          </Link>
          <Link to="/#">
            <Item>
              <Typography variant="h5">Ablauf</Typography>
            </Item>
          </Link>
          <Link to="/vorteile">
            <Item>
              <Typography variant="h5">Vorteile</Typography>
            </Item>
          </Link>
          <Link to="#submit-request">
            <Box>
              <Button variant="contained" size="large">
                Angebot einholen
              </Button>
            </Box>
          </Link>
        </Content>
      </Box>
    </Drawer>
  );
}
