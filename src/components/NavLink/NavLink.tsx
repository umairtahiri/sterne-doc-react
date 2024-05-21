import React from "react";
import { Typography } from "@mui/material";

const NavLink = ({ href, linkName, activeLink, handleLinkClick, children }) => {
  const isActive = activeLink === linkName;

  return (
    <a
      href={href}
      onClick={() => handleLinkClick(linkName)}
      style={{
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "blue" : "inherit",
      }}
    >
      <Typography variant="body1">{children}</Typography>
    </a>
  );
};

export default NavLink;
