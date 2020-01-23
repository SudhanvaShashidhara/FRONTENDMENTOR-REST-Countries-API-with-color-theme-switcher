import React, { useState, Fragment } from "react";

import GlobalStyle from "./GlobalStyle";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import styleGuide from "./styleGuide";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleThemeData = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  const themeObj = { ...styleGuide, colors: styleGuide.theme[theme].colors };
  return (
    <Fragment>
      <ThemeProvider theme={themeObj}>
        <GlobalStyle />
        <Header toggleThemeData={toggleThemeData} theme={theme} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail/:alpha3Code">
            <Detail />
          </Route>
        </Switch>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
