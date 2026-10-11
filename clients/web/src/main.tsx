import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  </StrictMode>
)