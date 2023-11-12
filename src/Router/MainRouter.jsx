import { createBrowserRouter } from 'react-router-dom';
import Layout from '../MainLayout/Layout';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';

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
                path: "/order/:category",
                element: <Order></Order>
            }
        ]
    }
])

export default MainRouter;