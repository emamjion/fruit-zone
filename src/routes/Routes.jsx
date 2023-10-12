import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home/Home/Home';
import AboutUs from '../Pages/Home/AboutUs/AboutUs';
import Shop from '../Pages/Home/Shop/Shop';
import Orders from '../Pages/Home/Orders/Orders';
import cartProductsLoader from '../components/Loaders/CartProductsLoader';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <AboutUs/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/orders',
                element: <Orders/>,
                loader: cartProductsLoader
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;