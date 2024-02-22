import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routeNames from './RouterNames';
import Home from '../ui/pages/home/Home';
import Terms from '../ui/pages/terms&conditions/TermsAndCondition';
import PrivacyPolicy from '../ui/pages/privacyPolicy/PrivacyPolicy';
import LandingWrapper from '../ui/wrappers/landingWrapper/LandingWrapper';
import NotFound from '../ui/pages/noFound/NotFound';
import Help from '../ui/pages/help/Help';
// import ScrollToTop from '../hooks/ScrollToTop';
// import ScrollToTop from '../hooks/ScrollToTop';

interface IProps {
  children: React.ReactNode;
}

const Router = ({ children }: IProps): JSX.Element => {
  // <LandingWrapper
  const router = createBrowserRouter([
    {
      path: routeNames.home,
      element: <Home />,
    },
    {
      path: routeNames.terms,
      element: <Terms />,
    },
    {
      path: routeNames.privacy,
      element: <PrivacyPolicy />,
    },
    {
      path: routeNames.noFound,
      element: <NotFound />,
    },
    {
      path: routeNames.help,
      element: <Help/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Router;