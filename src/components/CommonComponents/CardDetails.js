"strict mode";
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CountUp from "react-countup";

const CardDetails = ({ title, Nnumber }) => {
  return (
    <Box sx={{ width: ["100%", "600px", "300px"] }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <CountUp end={Nnumber} />+
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardDetails;
