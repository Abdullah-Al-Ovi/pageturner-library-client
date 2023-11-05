import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import { auth } from "../../../firebase.configue";
import {auth} from '../../../firebase'


export const authContex = createContext(null)
const AuthProvider = ({children}) => {
    const googlePro = new GoogleAuthProvider()
    const [user,setUser]= useState('')
    const [loading,setLoading]=useState(true)
    const [disName,setDisName]=useState('')
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
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubs()
    },[])

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
