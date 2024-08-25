import React from "react";
import { Box, Card, CardContent, Typography, CardActions, Button, TextField, Stack, Link } from "@mui/material";

export const Login = () => {
  return (
    <Card sx={{ backgroundColor: "#ffecd2", width: "80%", maxWidth: "500px", borderRadius: "25px" }}>
      <CardContent>
        <Box display="flex" justifyContent="center">
          <Typography gutterBottom variant="h5" component="div">
            Login
          </Typography>
        </Box>
        <Stack spacing={2}>
          <TextField label="Email" type="email" fullWidth InputProps={{ style: { borderRadius: "45px" }}} />
          <TextField label="Password" type="password" fullWidth InputProps={{ style: { borderRadius: "45px" }}} />
        </Stack>
      </CardContent>
      <CardActions>
        <Stack spacing={2} width="100%">
          <Box display="flex" justifyContent="center">
            <Button size="small" color="primary" variant="contained">Login</Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Link href="#" variant="body2">Forgot password?</Link>
          </Box>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default Login