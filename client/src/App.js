import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { AdminLogin } from "./AdminLogin";
import Home from "./Home";
import Validate from './Validate';
import CreateProduct from './CreateProduct';
import Dashboard from './Dashboard';
import * as Sentry from "@sentry/react";
import React from "react";
import NotFoundPage from "./NotFoundPage";

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
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  )
}

export default App;
