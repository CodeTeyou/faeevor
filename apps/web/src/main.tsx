import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./App";
import { Error404, Home, Login } from "./pages/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
