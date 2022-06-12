import React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import EggOutlinedIcon from "@mui/icons-material/EggOutlined";

const Navbar = () => {
  const navigate = useNavigate();

  const style = {
    backgroundColor: "#13b1c2",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={style}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <EggOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EGGRAMMER
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => navigate("/")} color="inherit">
              Home
            </Button>
            <Button onClick={() => navigate("/feature")} color="inherit">
              Feature
            </Button>
            <Button onClick={() => navigate("/pricing")} color="inherit">
              Pricing
            </Button>
            <Button onClick={() => navigate("/about")} color="inherit">
              About
            </Button>
            <Button onClick={() => navigate("/login")} color="inherit">
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
