import React, { Suspense } from "react";
import "./App.css";
import "./reset.css";
import "./global.css";
import Head from "./head/";
import Technology from "./technology";
import EconomicModelApplicationScenario from "./economicModelApplicationScenario";
import Team from "./team";
import Strategic from "./strategic";
import Road from "./road";
import Join from "./join";
import classnames from "classnames";
import Foot from "./foot";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Backend from "./backend/Backend";
import MarsApp from "./Mars";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Route exact path="/">
            <div
              className={classnames(
                "App",
                window.screen.width <= 1279 ? "m" : ""
              )}
            >
              <Head />
              <Technology />
              <EconomicModelApplicationScenario />
              <Team />
              <Strategic />
              <Road />
              <Join />
              <Foot />
            </div>
          </Route>

          <Route exact path="/admin">
            <Backend />
          </Route>

          <Route exact path="/mars">
            <MarsApp />
          </Route>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
