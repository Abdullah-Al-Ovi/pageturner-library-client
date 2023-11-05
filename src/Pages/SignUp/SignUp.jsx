import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import swal from 'sweetalert';
import { authContex } from "../../Components/AuthProvider/AuthProvider";


const SignUp = () => {
    const {createUser,updateUser,handleName,handleImage} = useContext(authContex)
    const [err,setErr] = useState('')
    
 


    const handleSignUp= (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name= e.target.name.value
        const link= e.target.link.value
        console.log(link);
        setErr('')

        if(!/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)){
            setErr('Password must be at least 6 characters,must contain at least one capital letter and one special character(@$!%*?&)')
            return
        }

        // handleName(name)
        createUser(email,password)
        .then(()=>{
            e.target.reset()
            handleName(name)
            handleImage(link)
           
           updateUser(name,link)
            .then(()=>{
                
            })
            .catch(()=>{
                
            })
            
            swal("Sign up Successfully!", "You are now a part of our family!", "success");
           
        })
        .catch(error=>{
            setErr(error.message)
        })
        
        
}

    return (
       
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex  justify-center min-h-screen px-6 mx-auto ">
                <form className="w-full max-w-md" onSubmit={handleSignUp}>
                   

                    <div className="flex items-center justify-center">
                        
                        <h2 className= "font-semibold text-xl">Sign up to create account </h2>
                    </div>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" required />
                    </div>

                    {/* <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>

                        <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                        <input id="dropzone-file" type="file" className="hidden" />
                    </label> */}


                    <div className="relative flex items-center mt-6">
                        <span className="absolute ml-5">
                        <i className="fa-regular fa-image"></i>
                        </span>

                        <input type="text" name="link" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo URL" />
                    </div>

                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" required />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" required />
                    </div>


                    <div className="mt-3">
                         {
                            err && <p className="text-red-500 font-semibold mb-3">{err}</p>
                        }
                        <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign Up
                        </button>
                        

                        <div className="mt-6 text-center">
                        <span className="ml-2 text-lg">
                       Already have an account?<Link className='text-blue-400 font-semibold ml-2 hover:underline' to='/sign-in'>Sign in</Link>
                    </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        
    );
};

export default SignUp;