import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header, Title } from "./App";
import { Error404, Home, Login, Friends, Faeevors } from "./pages/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Title />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Faeevors" element={<Faeevors />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
