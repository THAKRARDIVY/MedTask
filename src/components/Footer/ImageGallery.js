import React from "react";
import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

const ImageGallery = () => {
  const images = [
    { url: "/HomeImgs/image1.jpg" },
    { url: "/HomeImgs/image2.jpg" },
    { url: "/HomeImgs/image3.jpg" },
    { url: "/HomeImgs/image4.jpg" },
  ];
  return (
    <Box className="mr-2 pr-2">
      <SimpleImageSlider
        width="48%"
        height={150}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default ImageGallery;
