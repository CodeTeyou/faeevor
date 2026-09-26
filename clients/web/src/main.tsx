import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header, HomePage } from "./App";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <HomePage />
  </StrictMode>
)