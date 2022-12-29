import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard/Dashboard/Dashboard";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";
import ThemeDetails from "../../Pages/ThemeDetails/ThemeDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/themes/:id',
                element: <ThemeDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/themes/${params.id}`)

            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
])