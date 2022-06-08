import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  styled,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  marginTop: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Contate-nos"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 20px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="primary" fontSize="18px">
            Deixe sua mensagem
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/5453909/pexels-photo-5453909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              sx={{ width: 50, height: 50 }}
            />
            <Typography fontWeight={500} variant="span" color="primary">
              Central
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-flexible"
            label="Mensagem"
            multiline
            maxRows={4}
            color="primary"
            focused
          />
          <Button variant="contained" size="small" style={{marginTop: "20px"}}>
            Enviar
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
