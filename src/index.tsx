import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import Loading from "./Loading";
// import ScrollToTop from './hooks/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      {/* <ScrollToTop> */}
      <App />
      {/* </ScrollToTop> */}
    </Suspense>
  </React.StrictMode>
);
reportWebVitals();
