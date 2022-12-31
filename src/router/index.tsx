import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home';
import Portfolio from '@pages/portfolio';
import DesignSystem from '@pages/design-system';
import App from '../root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/design-system', element: <DesignSystem /> },
    ],
  },
]);

export default router;
