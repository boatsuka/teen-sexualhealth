import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard/dashboard";

const theme = createTheme({
  typography: {
    fontFamily: ["Kanit", "Prompt"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
          <Routes>
            <Route path="admin/login" element={<LoginPage />} />
            <Route path="admin/register" element={<RegisterPage />} />
            <Route path="admin/dashboard" element={<DashboardPage />} />
          </Routes>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
