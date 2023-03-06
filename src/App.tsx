import React from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";

import usePeristedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

export const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Container />
    </ThemeProvider>
  );
};
