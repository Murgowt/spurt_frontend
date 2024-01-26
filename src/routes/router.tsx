import { createBrowserRouter } from 'react-router-dom';

import DefaultLayout from '@layouts/DefaultLayout';
import RootLayout from '@layouts/RootLayout';

import LoginPage from '@pages/login';
import Custom404Page from '@pages/not-found';
import ResetPasswordPage from '@pages/reset-password';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // Route: '/login'
      {
        path: 'login',
        element: <RootLayout withNavBar={false} withFooter={false} />,
        children: [
          {
            path: '',
            element: <LoginPage />,
          },
        ],
      },
      // Route: '/reset-password'
      {
        path: 'reset-password',
        element: <RootLayout withNavBar={false} withFooter={false} />,
        children: [
          {
            path: '',
            element: <ResetPasswordPage />,
          },
        ],
      },
      // Route: '*' -> 404 Page
      {
        path: '*',
        element: <Custom404Page link="/" buttonText="Go Back" />,
      },
    ],
  },
]);
