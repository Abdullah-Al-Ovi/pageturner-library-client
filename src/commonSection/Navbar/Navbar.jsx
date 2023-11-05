import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'

import { authContex } from "../../Components/AuthProvider/AuthProvider";

import { useContext } from "react";

const Navbar = () => {

  
  const navigate = useNavigate()
    const {logOut,user,disName,photoLink}= useContext(authContex)
    
 

  const handleSignOut=()=>{
    logOut()
    .then(()=>{
        navigate('/')
    })
}

    return (
        <div className={`navbar bg-base-100 shadow-lg `}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='sign-in'>Sign in</NavLink></li>
       <li><NavLink to='/borrowed-books'>Borrowed Books </NavLink></li>
       <li><NavLink to='/all-books'>All Books </NavLink></li>
       {
        user?.email === 'admin@gmail.com' && 
        <>
            <li><NavLink to='/add-books'>Add Book</NavLink></li>
            
        </>
       }
       
       
      </ul>
    </div>
    <img className="w-[50px] h-[50px] rounded-full" src={logo} />
    <a className="btn btn-ghost normal-case md:text-xl">PageTurner Library</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='sign-in'>Sign in</NavLink></li>
       <li><NavLink to='/borrowed-books'>Borrowed Books </NavLink></li>
       <li><NavLink to='/all-books'>All Books </NavLink></li>
       {
        user?.email === 'admin@gmail.com' && 
        <>
            <li><NavLink to='/add-books'>Add Book</NavLink></li>
            
        </>
       }
    </ul>
  </div>
  <div className="navbar-end gap-2">

  {
    user &&  <div className="flex md:inline-block flex-col gap-2 justify-center items-center">
       
         <img className="w-[50px]  rounded-full object-cover inline-block" src={user.photoURL ? user.photoURL : photoLink} /> 

       
       
       <span className="mx-2  bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded py-1 px-[2px] md:font-medium text-white">{user.displayName ? user.displayName : disName}</span>
        <Link to='/'><button onClick={handleSignOut} className="rounded p-[2px] md:p-1  bg-red-500 text-white md:font-semibold">Sign out</button> </Link>
        
    </div>
   }
 

  </div>
</div>
    );
};

export default Navbar;