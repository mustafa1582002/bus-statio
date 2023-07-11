import { createBrowserRouter } from "react-router-dom";
import App from './App';
import { Guest } from "./middleware/Guest";
import { Admin } from "./middleware/Admin";
import History from './pages/history/History';
import Travel from './pages//Travel/Travel';
import ProductList from "./pages/product/ProductList";
import ProductInfo from "./pages/product/ProductInfo";
import Login from "./Login";
import Destinations from "./pages/Destinations/Destinations";
import AddDestinations from "./pages/Destinations/AddDestinations";
import UpdateDestinations from "./pages/Destinations/UpdateDestinations";
import ManageBuses from "./pages/Manage-buses/ManageBuses";
import AddBus from "./pages/Manage-buses/AddBus";
import UpdateBus from "./pages/Manage-buses/UpdateBus";
import Travellers from "./pages/Travellers/Travellers";
import AddTravellers from "./pages/Travellers/AddTravellers";
import UpdateTravellers from "./pages/Travellers/UpdateTravellers";
import Appointements from "./pages/Appointments/ManageAppointment";
import AddAppointments from "./pages/Appointments/AddAppointments";
import UpdateAppointments from "./pages/Appointments/UpdateAppointments";
import Requests from "./pages/Requests/Requests";
//import Dashboard from "./pages/Dashboard/Dashboard";
//import Card from "./pages/Dashboard/Card";

export const router = createBrowserRouter([
   
    {   
        element:<Guest></Guest>,
        children:[{
            path: "/login",
            element: <Login />
        }
        ]
    },
    {
        path: "",
        element: <App />,
        //Nesting Children
        children: [
            {
                path: "/Home",
                element: <ProductList />,
            },
            {
                path: "/product-info/:id",
                element: <ProductInfo />,
            },
            {
                path: "/history",
                element: <History />,
            },
            {
                path: "/travel",
                element: <Travel />,
            },
            {
                path: "/Destinations",
                element:<Admin/>,
                children: [
                    {
                        path:'',
                        element: <Destinations />,
                    },
                    {
                        path:'/Destinations/add',
                        element: <AddDestinations />,
                    },
                    {
                        path:'/Destinations/update',
                        element: <UpdateDestinations />,
                    },
                ]
            },
            {
                path: "/ManageBuses",
                element:<Admin/>,
                children: [
                    {
                        path:'',
                        element: <ManageBuses />
                    },
                    {
                        path:'/ManageBuses/add',
                        element: <AddBus />
                    },
                    {
                        path:'/ManageBuses/update',
                        element: <UpdateBus />
                    },
                ]
                
            },
            {
                path: "/Travellers",
                element:<Admin/>,
                children: [
                    {
                        path:'',
                        element: <Travellers />
                    },
                    {
                        path:'/Travellers/add',
                        element: <AddTravellers />
                    },
                    {
                        path:'/Travellers/update',
                        element: <UpdateTravellers />
                    },
                ]
            },
            {
                path: "/Appointements",
                element:<Admin/>,
                children: [
                    {
                        path:'',
                        element: <Appointements />
                    },
                    {
                        path:'/Appointements/add',
                        element: <AddAppointments />
                    },
                    {
                        path:'/Appointements/update',
                        element: <UpdateAppointments />
                    },
                ]
            },
            {
                path: "/Requests",
                element:<Admin/>,
                children: [
                    {
                        path:'',
                        element: <Requests />,
                    },
                ]
            },
            {
                path: "*",
                element: <h1> page Not found</h1>,
            },
        ],
    },
    ]);