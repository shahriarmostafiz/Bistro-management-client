import { createBrowserRouter } from 'react-router-dom';
import Layout from '../MainLayout/Layout';
import Home from '../pages/Home/Home/Home';

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            }
        ]
    }
])

export default MainRouter;