import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import moment from 'moment';
import 'moment/locale/id';
import { Toaster } from 'react-hot-toast';
import { store } from './app/store';
import { Provider } from 'react-redux';
import axios from 'axios';
// import swDev from "./swDev";

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient();
moment.locale('id');

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App />
                    <Toaster />
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
// swDev();
