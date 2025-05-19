import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from '../pages/Login'
import Register from '../pages/Register'
import Occasion from '../pages/Occasion'
import Newpage from '../components/Newpage'
import Gifting from '../pages/Gifting'
import Blog from '../pages/Blog'
import Chocolateday from '../pages/Chocolateday'
import Shopother from '../pages/Shopother'
import Typesofchocolate from '../pages/Typesofchocolate'
import Makechocolate from '../pages/Makechocolate'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path: '/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/occasions',
                element:<Occasion/>
            },
            {
                path:'/christmas',
                element:<Newpage/>
            },
            {
                path:'/gifting',
                element:<Gifting/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/chocolateday',
                element:<Chocolateday/>
            },
            {
                path:'/shop',
                element:<Shopother/>
            },
            {
                path:'/typesofchocolate',
                element:<Typesofchocolate/>
            },
            {
                path:'/makechocolate',
                element:<Makechocolate/>
            },
        ]        
    }
])

export default router
