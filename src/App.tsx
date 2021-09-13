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
import Foot from "./foot";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Backend from "./backend/Backend";

function App() {
  return (<>
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Route exact path="/">
          <div className="App">
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
      </Suspense>
    </BrowserRouter>
  </>);
}

export default App;
