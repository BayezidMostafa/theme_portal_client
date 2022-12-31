import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard/Dashboard/Dashboard";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";
import Suggestions from "../../Pages/Suggestion/Suggestions";
import ThemeDetails from "../../Pages/ThemeDetails/ThemeDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/suggestions',
                element: <Suggestions />
            },
            {
                path: '/themes/:id',
                element: <PrivateRoute><ThemeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/themes/${params.id}`)

            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
    }
])