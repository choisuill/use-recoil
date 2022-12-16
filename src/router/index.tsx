import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../root';
import Home from '../pages/home';
import Mypage from '../pages/mypage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/mypage',
    element: <Mypage />,
  },
]);

export default router;
