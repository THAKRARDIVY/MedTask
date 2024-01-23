"use client";
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useMediaQuery } from "@/Hooks/useMediaQuery";

const details = () => {
  const MediaQuery = useMediaQuery("(min-width:700px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", null, "row"],
        gap: "10px",
        margin: "10px",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: ["100%", "600px", "300px"] }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Patient
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <CountUp end={50} />+
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ width: ["100%", "600px", "300px"] }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Doctor
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <CountUp end={30} />+
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ width: ["100%", "600px", "300px"] }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Nurse
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <CountUp end={20} />+
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ width: ["100%", "600px", "300px"] }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Total
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <CountUp end={100} />+
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default details;
