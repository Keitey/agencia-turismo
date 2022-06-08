import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box width={300} >
        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Consultores Online
        </Typography>
        <AvatarGroup max={5} style={{ justifyContent: "flex-end" }}>
          <Avatar
            alt="Julia Robert"
            src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Camila Pitanga"
            src="https://media.istockphoto.com/photos/attractive-businesswoman-using-a-digital-tablet-while-standing-in-of-picture-id1164863397?b=1&k=20&m=1164863397&s=612x612&w=0&h=2MLNt4gQ1c15ASTOfOY6BA_eHg3WV84-fGdg56_1Yrk="
          />
          <Avatar
            alt="Samuel L Jackson"
            src="https://images.pexels.com/photos/3758112/pexels-photo-3758112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Airton Senna"
            src="https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Vitor Hugo"
            src="https://images.pexels.com/photos/10471442/pexels-photo-10471442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Nossos Clientes
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1319829/pexels-photo-1319829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/547116/pexels-photo-547116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/945177/pexels-photo-945177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Depoimentos
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Ótimo serviço"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Evelyn Hugo
                  </Typography>
                  {" — Proin in scelerisque diam, porta posuere arcu. Nullam sit amet bibendum velit…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Preços imbatíveis"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Kaz Brekker
                  </Typography>
                  {" — Curabitur in lacus fermentum, cursus lorem ut,…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/5.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Minha viagem foi perfeita!"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Lazlo Strange
                  </Typography>
                  {" — Lorem ipsum dolor sit amet, consectetur..."}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Jonny Adams" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Um sonho realizado"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Jesper Fahey
                  </Typography>
                  {" — Neque porro quisquam est qui dolorem..."}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
