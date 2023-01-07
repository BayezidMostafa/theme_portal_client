import { createBrowserRouter } from "react-router-dom";
import AddTemplates from "../../Layout/Dashboard/AddTemplates/AddTemplates";
import AllClients from "../../Layout/Dashboard/AllClients/AllClients";
import AllDevelopers from "../../Layout/Dashboard/AllDevelopers/AllDevelopers";
import Dashboard from "../../Layout/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Layout/Dashboard/MyOrders/MyOrders";
import MyPurchase from "../../Layout/Dashboard/MyPurchase/MyPurchase";
import MyTempLates from "../../Layout/Dashboard/MyTemplates/MyTempLates";
import Payment from "../../Layout/Dashboard/Payment/Payment";
import ReportedItems from "../../Layout/Dashboard/RepotedItems/ReportedItems";
import RequestVerification from "../../Layout/Dashboard/RequestVerfication/RequestVerification";
import VerifyRequest from "../../Layout/Dashboard/VerifyRequest/VerifyRequest";
import WishList from "../../Layout/Dashboard/WishList/WishList";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";
import Suggestions from "../../Pages/Suggestion/Suggestions";
import ThemeDetails from "../../Pages/ThemeDetails/ThemeDetails";
import AdminRoute from "../AdminRoute/AdminRoute";
import DeveloperRoute from "../DeveloperRoute/DeveloperRoute";
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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/alldevelopers',
                element: <AdminRoute><AllDevelopers /></AdminRoute>
            },
            {
                path: '/dashboard/allclients',
                element: <AdminRoute><AllClients /></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems /></AdminRoute>
            },
            {
                path: '/dashboard/verifyrequest',
                element: <AdminRoute><VerifyRequest /></AdminRoute>
            },
            {
                path: '/dashboard/mytemplates',
                element: <DeveloperRoute><MyTempLates /></DeveloperRoute>
            },
            {
                path: '/dashboard/addtemplate',
                element: <DeveloperRoute><AddTemplates /></DeveloperRoute>
            },
            {
                path: '/dashboard/requestverification',
                element: <DeveloperRoute><RequestVerification/></DeveloperRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders/>
            },
            {
                path: '/dashboard/wishlist',
                element: <WishList/>
            },
            {
                path: '/dashboard/mypurchase',
                element: <MyPurchase/>
            },
            {
                path: '/dashboard/payment/:booking_id',
                element: <Payment/>,
                loader: ({params})=> fetch(`http://localhost:5000/order/${params.booking_id}`, {
                    headers: {
                        'content-type':'application/json',
                        authorization: `Bearer ${localStorage.getItem('theme-token')}`
                    }
                })
            }
        ]
    }
])