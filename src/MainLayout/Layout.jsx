import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Home/Shared/Footer/Footer';
import NavBar from '../pages/Home/Shared/NavBar/NavBar';

const Layout = () => {
    const location = useLocation()
    // const register = location.pathname.includes("register")
    // const login = location.pathname.includes("login")
    return (
        <div className=''>
            {/* {register || <NavBar></NavBar>} */}
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* {register || <Footer></Footer>} */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;