import React from "react";
import Post from "./Post";

import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
        <Post />
    </Box>
  );
};

export default Feed;
