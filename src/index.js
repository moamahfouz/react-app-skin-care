import React from 'react';
import AppRouter from './router/AppRouter';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <React.StrictMode>
        <AppRouter/>
    </React.StrictMode>
);



