import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";

import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBooks from "../Pages/AddBooks/AddBooks";
import SignUp from "../Pages/SignUp/SignUp";


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
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'/borrowed-books',
                element:<BorrowedBooks></BorrowedBooks>
            },
            {
                path:'/all-books',
                element:<AllBooks></AllBooks>
            },
            {
                path:'/add-books',
                element:<AddBooks></AddBooks>
            }
        ]
    }
])

export default Router;