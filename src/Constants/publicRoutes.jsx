import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import publicLinks from "./link";

const Home = React.lazy(() => import("../Pages/Home/home"));
const About = React.lazy(() => import("../Pages/AboutUs/aboutUs"));
const publicRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={publicLinks.home} element={<Home />} />
          <Route path={publicLinks.aboutUs} element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default publicRoutes;
