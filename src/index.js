import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import swDev from "./swDev";

const container = document.getElementById("root");
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
// serviceWorkerRegistration.unregister();
// swDev();
