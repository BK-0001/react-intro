import { createRoot } from "react-dom/client";
import { ClassComponent } from "./components/ClassComponent.tsx";
import { Message } from "./components/FuncComponent.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <ClassComponent />
    <Message />
  </>
);
