import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../page/Login";
import TopBar from "../layout/TopBar";
import Footer from "../layout/Footer";
import Signup from "../page/Signup";

const Public = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);
  return (
    <>
      <TopBar />
      {routes}
      <Footer />
    </>
  );
};

export default Public;
