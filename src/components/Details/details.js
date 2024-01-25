"use client";
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useMediaQuery } from "@/Hooks/useMediaQuery";
import CardDetails from "@/components/CommonComponents/CardDetails";
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
      <CardDetails title={"Patient"} Nnumber={50} />
      <CardDetails title={"Doctor"} Nnumber={30} />
      <CardDetails title={"Nurse"} Nnumber={20} />
      <CardDetails title={"Total"} Nnumber={100} />
    </Box>
  );
};

export default details;
