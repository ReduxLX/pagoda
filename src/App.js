import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./router";
import { Provider } from "react-redux";
import store from "./redux";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import "./App.css";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
          <GlobalStyles />
        </Provider>
      </ThemeProvider>
    </div>
  );
};

const Input = styled.input``;

export default App;
