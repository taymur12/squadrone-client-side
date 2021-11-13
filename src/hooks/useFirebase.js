import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";

initializeAuthentication()

const FirebaseAuth = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
   

    //google
    const SignInWithGoogle = () => {
        setLoading(true)
      return  signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
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
            setLoading(false)
        })
    }, [auth])

    const userEmail = e => {
        setEmail(e.target.value)
    }
    const userPassword = e => {
        setPassword(e.target.value)
    }

    //For Register
    const registerProcess = (location, history) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')

            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }

   // login Process
    const loginProcess = ( location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=> setLoading(false))
    }
    //logout
    const logout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setLoading(false))
    }
    
    return { user, error, logout, SignInWithGoogle, registerProcess, loginProcess, userEmail, userPassword, isLoading }
}

export default FirebaseAuth;

