"use client";
import React from "react";
import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

const ImagesHome = () => {
  const images = [
    { url: "/HomeImgs/image1.jpg" },
    { url: "/HomeImgs/image2.jpg" },
    { url: "/HomeImgs/image3.jpg" },
    { url: "/HomeImgs/image4.jpg" },
  ];

  return (
    <Box>
      <SimpleImageSlider
        width="100%"
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
        size="100%"
        style={{ objectFit: "inherit" }}
      />
    </Box>
  );
};

export default ImagesHome;
