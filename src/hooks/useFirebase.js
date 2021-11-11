import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";

initializeAuthentication()

const FirebaseAuth = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //google
    const SignInWithGoogle = () => {
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
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser('')
            }
        })
    }, [])

    const userEmail = e => {
        setEmail(e.target.value)
    }
    const userPassword = e => {
        setPassword(e.target.value)
    }

    //For Register
    const registerProcess = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    // For login
    const loginProcess = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user)
        })
        .catch((error) => {
            setError(error.message)
        });
      
    }
    //logout
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    return { user, error, logout, SignInWithGoogle, registerProcess, loginProcess, userEmail, userPassword }
}

export default FirebaseAuth;