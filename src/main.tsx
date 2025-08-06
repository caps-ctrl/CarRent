import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <>
          <LoadingScreen />
        </>
      }
    >
      <div className="bg-black ">
        <App />
      </div>
    </Suspense>
  </StrictMode>
);
