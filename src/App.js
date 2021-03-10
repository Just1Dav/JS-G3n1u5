import React from "react";
import Router from "./router";
import { ThemeProvider } from "styled-components";

const spacing = {};
for (let index = 0; index < 30; index++) {
  spacing[index] = `${index * 5}px`;
}

export const theme = {
  spacing,
  breakpoint: {
    tablet: "46.0625em",
    desktop: "74.6875em",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
