import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routeNames from './RouterNames'
import Home from '../ui/pages/home/Home'
import Terms from '../ui/pages/terms&conditions/Terms'
import PrivacyPolicy from '../ui/pages/privacyPolicy/PrivacyPolicy'

const Router = (): JSX.Element => {
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
  ])
  return <RouterProvider router={router} />
}

export default Router
