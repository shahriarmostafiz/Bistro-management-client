import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth/useAuth';
import auth from '../../../../Firebase/firebase.config';
import { GiShoppingCart } from 'react-icons/gi';
import useCart from '../../../../hooks/useCart/useCart';


const NavBar = () => {
    const { user, logout } = useAuth()
    const [cart] = useCart()
    console.log("cart", cart);
    const handleLogout = () => {
        logout()
            .then(() => {
                console.log("logged out ");
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    const links = <>
        <li><NavLink to={'/'}>Home </NavLink></li>
        <li><NavLink to={'/menu'}>Menu </NavLink></li>
        <li><NavLink to={'/order'}>Order  </NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    </>
    return (
        <div className=''>
            <div className="navbar max-w-screen-xl mx-auto fixed z-10  text-white bg-black bg-opacity-25  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-Josefin">Bistro Boss </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className='flex gap-2'>
                            <img src={auth.currentUser?.photoURL} className='rounded-full w-12' alt="user img" />
                            <Link to={"dashboard/cart"} className="btn  ">
                                <GiShoppingCart></GiShoppingCart>
                                <div className="badge badge-secondary">+{cart?.length}</div>
                            </Link>
                            <button onClick={handleLogout} className='btn btn-ghost hover:btn-error'>logout </button >
                        </div>
                        :
                        <NavLink to={'/login'} className="btn btn-ghost ">Login   </NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;