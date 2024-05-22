import React, { useState } from "react";
import OptionsDrawer from "../Drawer/Drawer";
import CompanyLogo from "../../assets/logo.svg";
import menuIcon from "../../assets/burgerIcon.svg";
import { Img } from "react-image";
import Stack from "@mui/material/Stack";
import { HeaderContainer, Menu, Logo } from "./styles";

const CollapsedHeader = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => setShowDrawer(!showDrawer);

  return (
    <HeaderContainer>
      <a href="/#">
        <Logo src={CompanyLogo} alt="logo" width={150} />
      </a>

      <Menu onClick={toggleDrawer}>
        <Stack direction="row" gap={12}>
          <Img src={menuIcon} alt="menu icon" />
        </Stack>
      </Menu>
      <OptionsDrawer open={showDrawer} toggleDrawer={toggleDrawer} />
    </HeaderContainer>
  );
};

export default CollapsedHeader;
