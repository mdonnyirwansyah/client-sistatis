import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import moment from "moment";
import "moment/locale/id";
import { Toaster } from "react-hot-toast";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import swDev from "./swDev";

const container = document.getElementById("root");
const root = createRoot(container);
const queryClient = new QueryClient();
moment.locale("id");

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
// serviceWorkerRegistration.unregister();
// swDev();
