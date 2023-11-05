import { useContext } from "react";
import { authContex } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import swal from 'sweetalert';

const AdminPrivateRoute = ({children}) => {
    let {user,loading}=useContext(authContex)
    const location = useLocation()
    if(loading){
        return <div className="h-[60vh] flex items-center justify-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user?.email === 'admin@gmail.com'){
       return children
    }
    return (
    
       
        <Navigate state={location.pathname} to='/sign-in'></Navigate>
    
    )
};

export default AdminPrivateRoute;