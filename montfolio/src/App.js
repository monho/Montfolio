import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import * as P from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route basename={process.env.PUBLIC_URL} path="/" component={P.mainPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
