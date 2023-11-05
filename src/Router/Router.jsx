import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignOut from "../Pages/SignOut/SignOut";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/sign-in',
                element:<SignIn></SignIn>
            },
            {
                path:'/sign-out',
                element:<SignOut></SignOut>
            }
        ]
    }
])

export default Router;