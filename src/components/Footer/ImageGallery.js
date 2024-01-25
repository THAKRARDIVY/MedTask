import React from "react";
import { Box } from "@mui/material";
import SwiperImage from "../CommonComponents/SwiperImage";

const ImageGallery = () => {
  return (
    <Box className="mr-2 pr-2">
      <SwiperImage width={"48%"} height={150} />
    </Box>
  );
};

export default ImageGallery;
