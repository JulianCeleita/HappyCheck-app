import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Happy Check Application
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
