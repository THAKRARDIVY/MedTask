"use client";
import React from "react";
import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import HomeImages from "../../Data";

const ImagesHome = () => {
  return (
    <Box>
      <SimpleImageSlider
        width="100%"
        height={350}
        images={HomeImages?.HomeImages?.map((img) => img.url)}
        showBullets={true}
        showNavs={true}
        size="100%"
        style={{ objectFit: "inherit" }}
      />
    </Box>
  );
};

export default ImagesHome;
