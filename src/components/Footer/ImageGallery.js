import React from "react";
import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

const ImageGallery = () => {

  return (
    <Box className="mr-2 pr-2">
      <SimpleImageSlider
        width="48%"
        height={150}
        images={HomeImages?.HomeImages?.map((img) => img.url)}
        showBullets={true}
        showNavs={true}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default ImageGallery;
