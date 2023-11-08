import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import { auth } from "../../../firebase.configue";
import {auth} from '../../../firebase'
import useAxios from "../Hooks/useAxios";
import axios from "axios";


export const authContex = createContext(null)
const AuthProvider = ({children}) => {
    const googlePro = new GoogleAuthProvider()
    const [user,setUser]= useState('')
    const [loading,setLoading]=useState(true)
    const [disName,setDisName]=useState('')
    // const axiosBasic = useAxios()
    const [photoLink,setPhotoLink] = useState('')
    
    
  
    const createUser=(email,password)=>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,link)=>{
      
     
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: link
          })
      }
      const googleSignIn =()=>{
     
          return signInWithPopup(auth, googlePro)  
      }
      const signInUser=(email,password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
      }

      const logOut =()=>{
        
        return signOut(auth)
      }
    
    useEffect(()=>{
        const unSubs = onAuthStateChanged(auth,(currentUser)=>{
            const loggedUser = currentUser?.email || user?.email
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
              axios.post('https://library-server-sigma.vercel.app/jwt',loggedUser,{withCredentials:true}) 
              .then(res=>{
                console.log(res.data);
              })    
            }
            else {
                axios.post('https://library-server-sigma.vercel.app/logOut',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }
        })
        return ()=> unSubs()
    },[user?.email])

    const handleName=(name)=>{
      return setDisName(name)
    }
    const handleImage =(link)=>{
        return setPhotoLink(link)
    }

    

    const authInfo = {user,handleImage,createUser,updateUser,googleSignIn,signInUser,logOut,loading,handleName,disName,photoLink}

    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;
