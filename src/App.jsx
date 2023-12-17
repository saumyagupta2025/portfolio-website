import Projects from "./routes/Projects";
import React from "react";
import StarField from "./components/app/StarField";
import Skills from "./routes/Skills";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/app/Navbar";
import Footer from "./components/app/Footer";
import WorkExp from "./routes/WorkExp";
import Blogs from "./routes/Blogs";
import Publications from "./routes/Publications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/publications",
    element: <Publications />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/workExp",
    element: <WorkExp />,
  },
]);

const App = () => {
  return (
    <div className="app-container">
      <StarField numStars={100} />
      {/* <Navbar /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      <div className="app-wrapper">
        <RouterProvider router={router} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
