"use client";
import React from "react";
import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import HomeImages from "@/Data";

const SwiperImage = ({ width, height }) => {
  return (
    <Box>
      <SimpleImageSlider
        width={width}
        height={height}
        images={HomeImages?.HomeImages?.map((img) => img.url)}
        showBullets={true}
        showNavs={true}
        size="100%"
        style={{ objectFit: "inherit" }}
      />
    </Box>
  );
};

export default SwiperImage;
