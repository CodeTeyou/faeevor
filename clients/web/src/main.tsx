import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./App";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
  </StrictMode>
)