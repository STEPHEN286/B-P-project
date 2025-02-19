import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout.jsx";
import SkeletonLoader from "../components/SkelectonLoader.jsx";


import ProgressBar from "../components/ProgressBar.jsx";

const Home = lazy(() => import("./Home.jsx"));
const About = lazy(() => import("./About.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Services = lazy(() => import("./Services.jsx"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ProgressBar /> 
        <RootLayout />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          
            <Home />
       
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ].map((routes) => ({
      ...routes,
      element: (
        <Suspense fallback={<SkeletonLoader />}>{routes.element}</Suspense>
      ),
    })),
  },
]);

export default router;
