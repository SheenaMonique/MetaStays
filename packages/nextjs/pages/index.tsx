
import type { NextPage } from "next";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme();

const Home: NextPage = () => {
  return (
    <>
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
    </>
  );
};

export default Home;
