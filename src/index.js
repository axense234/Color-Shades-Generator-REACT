// React
import React, { StrictMode } from "react";
// Root
import { createRoot } from "react-dom/client";

// CSS
import "./styles.css";

// Components
import ColorGenerator from "./ColorGenerator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ColorGenerator />
  </StrictMode>
);
