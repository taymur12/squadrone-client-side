import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";

initializeAuthentication()

const FirebaseAuth = () =>{
    const [ user, setUser] = useState({})
    const [ error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //google
    const SignInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
          })
          .catch((error) => {
           setError(error.message)
          });
    }

    //current user
    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
               setUser(user)
            }
            else{
                setUser('')
            }
        })
    },[])
    //logout
    const logout = () =>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
          });
    }
   
    return {user, error, logout, SignInWithGoogle}
}

export default FirebaseAuth;