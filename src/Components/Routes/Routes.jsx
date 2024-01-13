// import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Landing_Page from "../Pages/Landing_Page/Landing_Page";
import Home_1 from "../Pages/Home_1/Home_1";
import Home_2 from "../Pages/Home_2/Home_2";
import About_Us_1 from "../Pages/Home_1/About_Us_1";
import About_Us_2 from "../Pages/Home_2/About_Us_2";
import Blog_2 from "../Pages/Home_2/Blog_2";
import Gallery_2 from "../Pages/Home_2/Gallery_2";
import Blog_1 from "../Pages/Home_1/Blog_1";
import Gallery_1 from "../Pages/Home_1/Gallery_1";
import Layout_1 from "../Pages/Home_1/Layout_1";
import Layout_2 from "../Pages/Home_2/Layout_2";
import Blog_Details_1 from "../Pages/Home_1/Blog_Details_1";
import Contact_Us_1 from "../Pages/Home_1/Contact_Us_1";
import Pricing_Plans_1 from "../Pages/Home_1/Pricing_Plans_1";
import Sign_In_1 from "../Pages/Home_1/Sign_In_1";
import Sign_Up_1 from "../Pages/Home_1/Sign_Up_1";
import Trams_Conditions_1 from "../Pages/Home_1/Trams_Conditions_1";
import ErrorPage_1 from "../Pages/Home_1/ErrorPage_1";
import Blog_Details_2 from "../Pages/Home_2/Blog_Details_2";
import Contact_Us_2 from "../Pages/Home_2/Contact_Us_2";
import Pricing_Plans_2 from "../Pages/Home_2/Pricing_Plans_2";
import Sign_In_2 from "../Pages/Home_2/Sign_In_2";
import Sign_Up_2 from "../Pages/Home_2/Sign_Up_2";
import Trams_Conditions_2 from "../Pages/Home_2/Trams_Conditions_2";
import ErrorPage_2 from "../Pages/Home_2/ErrorPage_2";
import Contact_Us_Variation_2 from "../Pages/Home_2/Contact_Us_Variation_2";
import Home_3 from "../Pages/Home_3/Home_3";
import Blog_3 from "../Pages/Home_3/Blog_3";
import Contact_Us_3 from "../Pages/Home_3/Contact_Us_3";
import Gallery_3 from "../Pages/Home_3/Gallery_3";
import Pricing_Plans_3 from "../Pages/Home_3/Pricing_Plans_3";
import Sign_In_3 from "../Pages/Home_3/Sign_In_3";
import Sign_Up_3 from "../Pages/Home_3/Sign_Up_3";
import Trams_Conditions_3 from "../Pages/Home_3/Trams_Conditions_3";
import ErrorPage_3 from "../Pages/Home_3/ErrorPage_3";
import Blog_Details_3 from "../Pages/Home_3/Blog_Details_3";
import About_Us_3 from "../Pages/Home_3/About_Us_3";
import Layout_3 from "../Pages/Home_3/Layout_3";
import Layout_4 from "../Pages/Home_4/Layout_4";
import Home_4 from "../Pages/Home_4/Home_4";
import About_Us_4 from "../Pages/Home_4/About_Us_4";
import Blog_4 from "../Pages/Home_4/Blog_4";
import Blog_Details_4 from "../Pages/Home_4/Blog_Details_4";
import Contact_Us_4 from "../Pages/Home_4/Contact_Us_4";
import Gallery_4 from "../Pages/Home_4/Gallery_4";
import Pricing_Plans_4 from "../Pages/Home_4/Pricing_Plans_4";
import Trams_Conditions_4 from "../Pages/Home_4/Trams_Conditions_4";
import ErrorPage_4 from "../Pages/Home_4/ErrorPage_4";
import FAQ_4 from "../Pages/Home_4/FAQ_4";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing_Page></Landing_Page>,
    },
    {
        path: "/Home_1",
        element: <Layout_1></Layout_1>,
        children: [
            {
                path: "/Home_1",
                element: <Home_1></Home_1>
            },
            {
                path: "/Home_1/About_Us",
                element: <About_Us_1></About_Us_1>
            },
            {
                path: "/Home_1/Blog",
                element: <Blog_1></Blog_1>
            },
            {
                path: "/Home_1/Blog_Details",
                element: <Blog_Details_1></Blog_Details_1>
            },
            {
                path: "/Home_1/Contact_Us",
                element: <Contact_Us_1></Contact_Us_1>
            },
            {
                path: "/Home_1/Gallery",
                element: <Gallery_1></Gallery_1>,
            },
            {
                path: "/Home_1/Pricing_Plans",
                element: <Pricing_Plans_1></Pricing_Plans_1>
            },
            {
                path: "/Home_1/Sign_In",
                element: <Sign_In_1></Sign_In_1>
            },
            {
                path: "/Home_1/Sign_Up",
                element: <Sign_Up_1></Sign_Up_1>
            },
            {
                path: "/Home_1/Trams_Conditions",
                element: <Trams_Conditions_1></Trams_Conditions_1>
            },
            {
                path: "/Home_1/ErrorPage",
                element: <ErrorPage_1></ErrorPage_1>
            }
            
        ]
    },
    {
        path: "/Home_2",
        element: <Layout_2></Layout_2>,
        children: [
            {
                path: "/Home_2",
                element: <Home_2></Home_2>
            },
            {
                path: "/Home_2/About_Us",
                element: <About_Us_2></About_Us_2>
            },
            {
                path: "/Home_2/Blog",
                element: <Blog_2></Blog_2>
            },
            {
                path: "/Home_2/Blog_Details",
                element: <Blog_Details_2></Blog_Details_2>
            },
            {
                path: "/Home_2/Contact_Us",
                element: <Contact_Us_2></Contact_Us_2>
            },
            {
                path: "/Home_2/Contact_Us_Variation",
                element: <Contact_Us_Variation_2></Contact_Us_Variation_2>
            },
            {
                path: "/Home_2/Gallery",
                element: <Gallery_2></Gallery_2>,
            },
            {
                path: "/Home_2/Pricing_Plans",
                element: <Pricing_Plans_2></Pricing_Plans_2>
            },
            {
                path: "/Home_2/Sign_In",
                element: <Sign_In_2></Sign_In_2>
            },
            {
                path: "/Home_2/Sign_Up",
                element: <Sign_Up_2></Sign_Up_2>
            },
            {
                path: "/Home_2/Trams_Conditions",
                element: <Trams_Conditions_2></Trams_Conditions_2>
            },
            {
                path: "/Home_2/ErrorPage",
                element: <ErrorPage_2></ErrorPage_2>
            }
        ]
    },
    {
        path: "/Home_3",
        element: <Layout_3></Layout_3>,
        children: [
            {
                path: "/Home_3",
                element: <Home_3></Home_3>
            },
            {
                path: "/Home_3/About_Us",
                element: <About_Us_3></About_Us_3>
            },
            {
                path: "/Home_3/Blog",
                element: <Blog_3></Blog_3>
            },
            {
                path: "/Home_3/Blog_Details",
                element: <Blog_Details_3></Blog_Details_3>
            },
            {
                path: "/Home_3/Contact_Us",
                element: <Contact_Us_3></Contact_Us_3>
            },
            {
                path: "/Home_3/Gallery",
                element: <Gallery_3></Gallery_3>,
            },
            {
                path: "/Home_3/Pricing_Plans",
                element: <Pricing_Plans_3></Pricing_Plans_3>
            },
            {
                path: "/Home_3/Sign_In",
                element: <Sign_In_3></Sign_In_3>
            },
            {
                path: "/Home_3/Sign_Up",
                element: <Sign_Up_3></Sign_Up_3>
            },
            {
                path: "/Home_3/Trams_Conditions",
                element: <Trams_Conditions_3></Trams_Conditions_3>
            },
            {
                path: "/Home_3/ErrorPage",
                element: <ErrorPage_3></ErrorPage_3>
            }
            
        ]
    },
    {
        path: "/Home_4",
        element: <Layout_4></Layout_4>,
        children: [
            {
                path: "/Home_4",
                element: <Home_4></Home_4>
            },
            {
                path: "/Home_4/About_Us",
                element: <About_Us_4></About_Us_4>
            },
            {
                path: "/Home_4/Blog",
                element: <Blog_4></Blog_4>
            },
            {
                path: "/Home_4/Blog_Details",
                element: <Blog_Details_4></Blog_Details_4>
            },
            {
                path: "/Home_4/Contact_Us",
                element: <Contact_Us_4></Contact_Us_4>
            },
            {
                path: "/Home_4/Gallery",
                element: <Gallery_4></Gallery_4>,
            },
            {
                path: "/Home_4/Pricing_Plans",
                element: <Pricing_Plans_4></Pricing_Plans_4>
            },
            {
                path: "/Home_4/FAQ",
                element: <FAQ_4></FAQ_4>
            },
            {
                path: "/Home_4/Trams_Conditions",
                element: <Trams_Conditions_4></Trams_Conditions_4>
            },
            {
                path: "/Home_4/ErrorPage",
                element: <ErrorPage_4></ErrorPage_4>
            }
            
        ]
    }
  ]);

export default router;