import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./components/Store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Store />
    </StrictMode>
  </BrowserRouter>
);
