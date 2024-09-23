import React from 'react'
import DispData from './Components/DispData'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './Components/Add';
import Update from './Components/Update';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DispData/>,
    },
    {
      path: "/create",
      element: <Add/>,
    },
    {
      path: "/update/:id",
      element: <Update/>,
    },
  ]);
 
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App