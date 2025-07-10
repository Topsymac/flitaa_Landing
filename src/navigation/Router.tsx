import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routeNames from "./RouterNames";
// import LandingWrapper from "../ui/wrappers/landingWrapper/LandingWrapper";
import { lazy } from "react";
const Home = lazy(() => import("../ui/pages/home/Home"));
const Terms = lazy(
  () => import("../ui/pages/terms&conditions/TermsAndCondition")
);
const PrivacyPolicy = lazy(
  () => import("../ui/pages/privacyPolicy/PrivacyPolicy")
);
const Help = lazy(() => import("../ui/pages/help/Help"));
const NotFound = lazy(() => import("../ui/pages/noFound/NotFound"));

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
      element: <Help />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
