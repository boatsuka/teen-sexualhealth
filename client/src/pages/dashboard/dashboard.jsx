import {
  Box,
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

function dashboard() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Teen Sexual Health
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  
                </ListItemIcon>
                <ListItemText primary="หน้าหลัก" />
              </ListItem>
            </List>
          </List>
          <Divider />
          <List>
            <ListItem button component={Link} to="/search">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="ค้นหา" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default dashboard;
