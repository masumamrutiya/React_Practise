import "./App.css";
import Displaydata from "./Components/Displaydata";
import Add from "./Components/Add";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "./Components/Update";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Displaydata/></>,
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
  );
}

export default App;
