import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "primary",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  input:{
    color: "black"
  }
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} fontWeight={700} >
          Viaje Mais
        </Typography>
        <ConnectingAirportsIcon
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Buscar viagem..."/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="success">
            <CalendarMonthIcon />
          </Badge>
          <Badge badgeContent={4} color="success">
            <ShoppingCartCheckoutIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/346696/pexels-photo-346696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e)=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/346696/pexels-photo-346696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Menu</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Destinos</MenuItem>
        <MenuItem>Pacotes</MenuItem>
        <MenuItem>Cruzeiros</MenuItem>
        <MenuItem>Carros</MenuItem>
        <MenuItem>Consultores</MenuItem>
        <MenuItem>Depoimentos</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
