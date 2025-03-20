import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Car } from "./components/Car";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Car/>
    </StrictMode>
  </BrowserRouter>
);
