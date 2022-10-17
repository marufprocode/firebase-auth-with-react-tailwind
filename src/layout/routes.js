import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/Register";
import Main from "./Main";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home/></PrivateRoute>,
            },
            {
                path: '/home',
                element: <PrivateRoute><Home/></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    }
]);

export default routes;