"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useMediaQuery } from "@/Hooks/useMediaQuery";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

const header = () => {
  const MediaQuery = useMediaQuery("(min-width:700px)");

  const [age, setAge] = useState("");
  const [manu, setManu] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleToggleMenu = () => {
    setManu(!manu);
  };

  return (
    <div>
      {MediaQuery ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ["10px", null, "20px"],
              }}
            >
              <Box>
                <Image src={"/React.png"} alt="logo" width={30} height={30} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ["10px", null, "20px"],
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Home
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  About Us
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Careers
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Contact Us
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: 120 }}
                    size="small"
                    className="mb-2"
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      className="text-white font-normal text-xl"
                    >
                      Services
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Emergency care</MenuItem>
                      <MenuItem value={20}>Surgery</MenuItem>
                      <MenuItem value={30}>Diagnostic imaging</MenuItem>
                      <MenuItem value={30}>X-ray/radiology services</MenuItem>
                    </Select>
                  </FormControl>
                </Typography>
              </Box>

              <Box
                sx={{
                  position: ["static", null, "absolute"],
                  right: ["auto", null, "10px"],
                  marginTop: ["10px", null, "0"],
                }}
              >
                <Button variant="contained" color="inherit">
                  Pay Now
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ["10px", null, "20px"],
              }}
            >
              <Box>
                {!manu && (
                  <div>
                    <Image
                      src={"/React.png"}
                      alt="logo"
                      width={30}
                      height={30}
                    />
                  </div>
                )}
              </Box>
              <Box className="fixed right-1">
                {!manu && (
                  <Box>
                    <DensityMediumIcon onClick={handleToggleMenu} />
                  </Box>
                )}
              </Box>

              {manu && (
                <Box className="m-2">
                  <Box className="fixed right-1">
                    <CloseIcon onClick={handleToggleMenu} />
                  </Box>
                  <Box
                    className="flex flex-col items-center justify-center ml-10"
                    sx={{ height: "100vh" }}
                  >
                    <Box className="flex flex-col items-center">
                      <Typography
                        variant="h6"
                        component="div"
                        className="text-center"
                      >
                        Home
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="text-center"
                      >
                        About Us
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="text-center"
                      >
                        Careers
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="text-center"
                      >
                        Contact Us
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="text-center"
                      >
                        <FormControl
                          variant="standard"
                          sx={{ minWidth: 120 }}
                          size="small"
                        >
                          <InputLabel
                            id="demo-simple-select-label"
                            className="text-white font-normal text-xl"
                          >
                            Services
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className="text-white font-normal text-xl"
                            value={age}
                            label="Services"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Emergency care</MenuItem>
                            <MenuItem value={20}>Surgery</MenuItem>
                            <MenuItem value={30}>Diagnostic imaging</MenuItem>
                            <MenuItem value={40}>
                              X-ray/radiology services
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Typography>
                      <Button
                        className="m-2 p-2"
                        variant="contained"
                        color="inherit"
                      >
                        Pay Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </div>
  );
};

export default header;
