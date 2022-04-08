import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AdminLogin } from "./AdminLogin";
import Home from "./Home";
import Validate from './Validate';
import CreateProduct from './CreateProduct';
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import * as Sentry from "@sentry/react";
import React from "react";

Sentry.init({
  dsn: "https://9b3d81b382e74643a9647070e5092443@o358880.ingest.sentry.io/6146694",
  tracesSampleRate: 1.0,
});

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<AdminLogin />} />
      <Route path="validate/:id" element={<Validate />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="create" element={<CreateProduct />} />
    </Routes>
  )
}

function App() {
  useEffect(() => {
    document.title = "BlockComet"
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  )
}

export default App;
