import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";

import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBooks from "../Pages/AddBooks/AddBooks";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AdminPrivateRoute from "../Components/AdminPrivateRoute/AdminPrivateRoute";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";


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
                element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path:'/all-books',
                element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path:'/add-books',
                element:<AdminPrivateRoute><AddBooks></AddBooks></AdminPrivateRoute>
            },
            {
                path:'/category/:cat',
                element:<CategoryBooks></CategoryBooks>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.cat}`)
            },
            {
                path:'/book/:id',
                element:<BookDetails></BookDetails>,
                loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    }
])

export default Router;