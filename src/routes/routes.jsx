import {  lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";



const Home = lazy(() => import('./Home.jsx'));
const About = lazy(() => import('./About.jsx'));
const Contact = lazy(() => import('./Contact.jsx'));
const Services = lazy(() => import('./Services.jsx'));


const router = createBrowserRouter(
     [
        {
         
            path: "/",
            element: <RootLayout />,
            children:  [
                { 
                    index: true,
                    element:  <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                  </Suspense>
                },
                {
                    path: "/about",
                    element: <Suspense fallback={<div>Loading...</div>}>
                    <About />
                    </Suspense>
                },
                {
                    path: "/services",
                    element: <Suspense fallback={<div>Loading...</div>}>
                    <Services />
                    </Suspense>
                },
                {
                    path: "/contact",
                    element: <Suspense fallback={<div>Loading...</div>}>
                    <Contact />
                    </Suspense>
                }
             
            ]
            }

            
    
       
    ]
);

export default router;