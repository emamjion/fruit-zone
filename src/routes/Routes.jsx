import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home/Home/Home';
import AboutUs from '../Pages/Home/AboutUs/AboutUs';
import Shop from '../Pages/Home/Shop/Shop';


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
            }
        ]
    }
])

export default router;