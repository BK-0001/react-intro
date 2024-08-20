import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClassComponent } from "./components/ClassComponent.tsx";
import { FuncComponent } from "./components/FuncComponent.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClassComponent />
    <FuncComponent />
  </StrictMode>
);
