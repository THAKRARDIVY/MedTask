"use client";
import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../.././../public/HomeImgs/image1.jpg";
import image2 from "../.././../public/HomeImgs/image2.jpg";
import image3 from "../.././../public/HomeImgs/image3.jpg";

const HospitalDetails = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <Box
      className={`flex flex-col md:flex-row gap-4 m-2 p-2 items-center justify-center ${
        isHovered ? "bg-gray-200" : ""
      }`}
    >
      {isHovered && (
        <div className="w-screen h-full bg-gray-200 transition-all duration-300">
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </div>
      )}
      {/* Card 1 */}
      <Box
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="relative"
      >
        <Card className="hover:bg-gray-200">
          {/* Set the layout property to "responsive" for the Image */}
          <Image
            src={image1}
            alt="logo"
            width={530}
            height={30}
            layout="responsive"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Card 2 */}
      <Box
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="relative"
      >
        <Card className="hover:bg-gray-200">
          {/* Set the layout property to "responsive" for the Image */}
          <Image
            src={image2}
            alt="logo"
            width={530}
            height={30}
            layout="responsive"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Card 3 */}
      <Box
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="relative"
      >
        <Card className="hover:bg-gray-200">
          {/* Set the layout property to "responsive" for the Image */}
          <Image
            src={image3}
            alt="logo"
            width={530}
            height={30}
            layout="responsive"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HospitalDetails;
