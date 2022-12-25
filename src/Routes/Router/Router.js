import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/',
                element: <></>
            },
            {
                path: '/',
                element: <></>
            },
            {
                path: '/',
                element: <></>
            },
            {
                path: '/',
                element: <></>
            },
            {
                path: '/',
                element: <></>
            },
        ]
    }
])