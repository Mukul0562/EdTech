import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="error" aria-label="logo">
          {/* <SchoolIcon /> */}
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 5 }}>
          𝓔𝓭𝓣𝓮𝓬𝓱
        </Typography>
        <Stack direction="row" spacing={4}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</NavLink>
          <NavLink to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</NavLink>
          <NavLink to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</NavLink>
          <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</NavLink>
          <NavLink to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</NavLink>


        </Stack>
      </Toolbar>
    </AppBar>
  );
};
