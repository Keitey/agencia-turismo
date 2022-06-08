import React from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  CardActions,
  IconButton,
  CardMedia,
  Checkbox,
} from "@mui/material";

import Favorite from "@mui/icons-material/Favorite";
import MoreVert from "@mui/icons-material/MoreVert";
import Share from "@mui/icons-material/Share";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <>
      <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
              <AddLocationAltIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Capadócia"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Capadocia"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="justify"
          >
            A Capadócia, uma região semiárida na área central da Turquia, é
            conhecida pelas inconfundíveis "chaminés de fada", altas formações
            rochosas em formato de cone agrupadas no Vale dos Monges, em Göreme
            e em outros lugares. Outros locais importantes são as casas da Idade
            do Bronze esculpidas nas paredes do vale por trogloditas (habitantes
            das cavernas) e usadas posteriormente como refúgio pelos primeiros
            cristãos. O Vale de Ihlara, com 100 metros de profundidade, abriga
            várias igrejas esculpidas nas rochas.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "#d32f2f" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card style={{ marginBottom: "20px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
              <AddLocationAltIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Machu Pichu"
          subheader="January 04, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Machu Pichu"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="justify"
          >
            Machu Picchu é uma cidadela inca que fica no alto da Cordilheira dos
            Andes no Peru, acima do vale do rio Urubamba. Construída no século
            XV e posteriormente abandonada, ela é conhecida pelas sofisticadas
            muralhas de pedra contínuas, cujos imensos blocos foram unidos sem o
            uso de argamassa, pelas construções intrigantes que levam em conta o
            alinhamento dos astros e pelas vistas panorâmicas. A antiga
            utilidade dessas construções segue sendo um mistério
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "#d32f2f" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card style={{ marginBottom: "20px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
              <AddLocationAltIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Maragogi"
          subheader="March 25, 2020"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/4712763/pexels-photo-4712763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Maragogi"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="justify"
          >
            Maragogi está situado no Nordeste Brasileiro, ao Norte do litoral de
            Alagoas, nas margens do Oceano Atlântico. Como tantos outros
            paraísos alagoanos, a cidade não poderia estar localizada em outro
            estado, pois Alagoas é esse paraíso do início ao fim! Maragogi é o
            segundo mais importante ponto turístico de Alagoas, encontra-se na
            chamada Costa dos Corais, bem no meio do trajeto entre as cidades de
            Maceió, Estado de Alagoas, e Recife, no Estado de Pernambuco.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "#d32f2f" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
