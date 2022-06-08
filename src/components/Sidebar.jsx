import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LuggageIcon from "@mui/icons-material/Luggage";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ModeNight from "@mui/icons-material/ModeNight";

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#destinos">
              <ListItemIcon>
                <LuggageIcon />
              </ListItemIcon>
              <ListItemText primary="Destinos" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#pacotes">
              <ListItemIcon>
                <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Pacotes" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#cruzeiros">
              <ListItemIcon>
                <DirectionsBoatIcon />
              </ListItemIcon>
              <ListItemText primary="Cruzeiros" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#carros">
              <ListItemIcon>
                <CarRentalIcon />
              </ListItemIcon>
              <ListItemText primary="Carros" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#voos">
              <ListItemIcon>
                <AirplanemodeActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Passagens" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch size="large" onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
