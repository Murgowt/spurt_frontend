import { createBrowserRouter } from 'react-router-dom';

import DefaultLayout from '@layouts/DefaultLayout';
import RootLayout from '@layouts/RootLayout';

import HomePage from '@pages/home';
import LoginPage from '@pages/login';
import Custom404Page from '@pages/not-found';
import ResetPasswordPage from '@pages/reset-password';
import RegisterPharmacistPage from '@pages/register-pharmacist';
import RegisterAdminPage from '@pages/register-admin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // Route: '/home'
      {
        path: '',
        element: <RootLayout withNavBar withFooter />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/home',
            element: <HomePage />,
          },
        ],
      },
      // Route: '/login'
      {
        path: 'login',
        element: <RootLayout withNavBar withFooter={false} />,
        children: [
          {
            path: '',
            element: <LoginPage />,
          },
        ],
      },
      // Route: '/register-pharmacist'
      {
        path: 'register-pharmacist',
        element: <RootLayout withNavBar withFooter />,
        children: [
          {
            path: '',
            element: <RegisterPharmacistPage />,
          },
        ],
      },
      // Route: '/register-admin'
      {
        path: 'register-admin',
        element: <RootLayout withNavBar withFooter />,
        children: [
          {
            path: '',
            element: <RegisterAdminPage />,
          },
        ],
      },
      // Route: '/reset-password'
      {
        path: 'reset-password',
        element: <RootLayout withNavBar withFooter />,
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
