import { createBrowserRouter } from 'react-router-dom';
import Layout from '../MainLayout/Layout';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Register/Register/Register';
import Dashboard from '../MainLayout/Dashboard/Dashboard';
import Cart from '../pages/Dashboard/Cart/Cart';

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, {
                path: "/menu",
                element: <Menu></Menu>
            }, {
                path: "/order",
                element: <Order></Order>
            }, {
                path: "/order/:category",
                element: <Order></Order>
            },
        ]
    }, {
        path: "/login",
        element: <Login></Login>
    }, {
        path: "/register",
        element: <Register></Register>
    }, {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [{
            path: "/dashboard/cart",
            element: <Cart></Cart>
        }
        ]
    }
])

export default MainRouter;