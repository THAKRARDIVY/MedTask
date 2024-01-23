"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import ImageGallery from "./ImageGallery";
import { useMediaQuery } from "@/Hooks/useMediaQuery";

export default function footer() {
  return (
    <Box className="m-2 p-2">
      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={6}>
          <Card className=" h-[150px]">
            <CardContent>
              <Typography component="div">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={6}>
          <ImageGallery />
        </Grid>
      </Grid>
    </Box>
  );
}
