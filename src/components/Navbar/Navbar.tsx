import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import FavoriteTable from "./FavoriteTable/FavoriteTable";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar color="secondary" position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Happy Check Application
          </Typography>
          <Button size="large" sx={{ color: "white" }}
        startIcon={<AssignmentTurnedInIcon/>}
      > Checked
      </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
