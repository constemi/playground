import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { NavBar } from "./components";
import { Products } from "./features";

import store from "./store";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/" render={() => <Products />} />
              <Redirect to="/" />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
