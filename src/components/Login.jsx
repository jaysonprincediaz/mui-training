import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

import BG from "../asset/BG.jpg";

const Login = () => {
  const image = {
    boxContainer: {
      backgroundImage: `url(${BG})`,
      height: "100vh",
      width: "100%",
    },
  };

  const paperStyle = {
    padding: "40px",
    height: "87vh",
    width: "400px",
    margin: "auto",
    fontWeight: "400px",
  };

  const avatarStyle = {
    backgroundColor: "#13b1c2",
    margin: "5px auto",
  };

  const buttonStyle = {
    borderRadius: "30px",
    backgroundColor: "#13b1c2",
    marginBottom: "1.5rem",
  };

  return (
    <Box style={image.boxContainer} padding="50px">
      <Paper elevation={10} style={paperStyle}>
        <Box>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h4" component="h1" fontWeight="bold">
              Hello!
            </Typography>
          </Grid>
        </Box>
        <Box margin="20px auto">
          <TextField variant="standard" label="Username" fullWidth required>
            Username
          </TextField>
        </Box>
        <Box>
          <TextField
            variant="standard"
            label="Password"
            type="password"
            fullWidth
            required
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" margin="8px 0">
          <Typography
            fontSize={14}
            variant="p"
            component="span"
            sx={{ cursor: "pointer", color: "gray" }}
          >
            Forgot password?
          </Typography>
        </Box>
        <Box sx={{ margin: "2rem 0" }}>
          <Button
            style={buttonStyle}
            variant="contained"
            size="large"
            fullWidth
          >
            <Typography variant="h6" component="h1">
              Sign in
            </Typography>
          </Button>
        </Box>
        <Box sx={{ margin: "1rem 0" }}>
          <Divider>
            <Typography color="gray" fontSize={14} variant="p" component="span">
              or
            </Typography>
          </Divider>
        </Box>
        <Box display="flex" justifyContent="center">
          <Grid>
            <FacebookOutlinedIcon
              sx={{ fontSize: "3rem", color: "#2727e8", cursor: "pointer" }}
            />
            <GoogleIcon
              sx={{
                fontSize: "2.6rem",
                color: "white",
                backgroundColor: "#ff5700",
                borderRadius: "30px",
                margin: "3px 32px",
                cursor: "pointer",
              }}
            />
            <TwitterIcon
              sx={{
                fontSize: "2.6rem",
                color: "white",
                backgroundColor: "#13b1c2",
                borderRadius: "30px",
                margin: "3px 5px",
                cursor: "pointer",
              }}
            />
          </Grid>
        </Box>
        <Box marginTop="2rem">
          <Divider>
            <Typography fontSize={14} variant="p" component="span">
              Don't have account?
            </Typography>
          </Divider>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="p"
            component="h4"
            sx={{ color: "#13b1c2", cursor: "pointer" }}
          >
            SIGN UP
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
