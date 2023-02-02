import { AppBar, Button, dialogActionsClasses, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import FavoriteTable from "./FavoriteTable/FavoriteTable";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = ()=>{
    dialogOpenSubject$.setSubject = true;
  }

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
          <Button size="large" sx={{ color: "white" }} aria-label="favorites" component="label" onClick={handleClick}
        startIcon={<AssignmentTurnedInIcon/>}
      > Checked
      </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
