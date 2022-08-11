import React from "react";
import styles from "./styles";
import { Box, Typography, Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <>
      <Box sx={styles.Login}>
        <Typography sx={styles.LoginText}>Login</Typography>
        <Box component="form">
          <TextField id="outlined" label="First Name" />
          <TextField id="outlined" label="Last Name" />
          <TextField id="outlined" label="Email" />
          <TextField id="outlined" label="Password" />
        </Box>
      </Box>
    </>
  );
}
