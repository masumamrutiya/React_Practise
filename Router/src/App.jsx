import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import ContactUS from "./Components/ContactUS";
import Github from "./Components/Github";
import Header from "./Components/Header";
import Notfound from "./Components/Notfound";
import Profile from "./Components/Profile";
import ProfilePage from "./Components/ProfilePage";
// import Header from "./Components/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Header /> <Home /> <Footer />{" "}
        </>
      ),
      errorElement: <Notfound />,
    },
    {
      path: "/about",
      element: (
        <>
          {" "}
          <Header /> <About /> <Footer />{" "}
        </>
      ),
    },
    {
      path: "/service",
      element: (
        <>
          {" "}
          <Header /> <Service /> <Footer />
        </>
      ),
    },
    {
      path: "/contactUS",
      element: (
        <>
          {" "}
          <Header /> <ContactUS /> <Footer />{" "}
        </>
      ),
    },
    {
      path: "/github",
      element: (
        <>
          {" "}
          <Header /> <Github /> <Footer />{" "}
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          {" "}
          <Header /> <ProfilePage /> <Footer />{" "}
        </>
      ),
      children: [
        {
          path: "/profile/:profilemap",
          element: (
            <>
              <Profile />
            </>
          ),
        },
       
      ],
    },
  ]);

  return (
    <>
      <i>
        <h1 className="bg-success text-white text-center p-4">React Router</h1>
      </i>
      {/* <Header/> */}

      {/* <Footer/>  */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
