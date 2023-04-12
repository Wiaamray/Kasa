import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar.js";
import Footer from "./layouts/Footer/Footer.js";
import Main from "./layouts/Main/Main.js";
import Homepage from "./pages/Home/Homepage.js";
import Accomodationpage from "./pages/Accomodation/Accomodationpage.js";
import About from "./pages/About/About.js";

import ErrorPageNotFound from "./pages/404/ErrorPageNotFound.js"

const HeaderFooterLayout = () => {
  return (<>
  <Navbar />
  <Main>
  <Outlet />
  </Main>
  <Footer />
  </>
  )
}
//Création d'un router
const router = createBrowserRouter([

  {
    path: "/",
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,

    children: [
      {
        path: "/",
        element: <Homepage />
      },

      {
        path: "/flat",
        element: <Accomodationpage />
      },

      {
        path: "/about",
        element: <About />
      },
    
    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
