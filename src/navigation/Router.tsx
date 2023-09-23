import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routeNames from './RouterNames'
import Home from '../ui/pages/home/Home'


const Router = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: routeNames.home,
      element: <Home />,
    }
  ])
  return <RouterProvider router={router} />
}

export default Router
