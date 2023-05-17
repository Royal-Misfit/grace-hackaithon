import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { FunctionComponent } from "react";

import logo from "percev-foreman.png";

const TopBar: FunctionComponent = () => {
  return (
    <Box sx={{ height: "4.29875rem", }}>
      <AppBar position="static" sx={{ height: "4.3rem" }}>
        <Toolbar style={{ backgroundColor: "#292562", height: "100%" }}>
          <IconButton size="medium" edge="start" color="inherit" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            style={{
              maxWidth: "35%",
              maxHeight: "80%",
            }}
          ></img>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
