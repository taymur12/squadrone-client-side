import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";

initializeAuthentication()

const FirebaseAuth = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [errors, setErrors] = useState(null)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
   

    //google
    const SignInWithGoogle = () => {
        setLoading(true)
      return  signInWithPopup(auth, googleProvider)
            // .then((result)=>{
            //     saveUser(user.email, user.displayName, 'PUT')
            // })
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

    useEffect(()=>{
        const url = `https://fierce-hollows-37330.herokuapp.com/newusers/${user.email}`
        fetch(url)
        // .then(res =>{
        //     console.log(res)
        //     if(!res.ok){
        //         throw Error('COULD NOT FETCH THE DATA FOR THE RESOURCE')
        //     }
        // })
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
        .catch(err =>{
            setErrors(err.message)
        })
    },[user.email])

    // const userEmail = e => {
    //     setEmail(e.target.value)
    // }
    // const userPassword = e => {
    //     setPassword(e.target.value)
    // }

    //For Register
    const registerProcess = ( email, password, location, history, name) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
                const newUser = {email, displayName: name}
                setUser(newUser)
                //save user to database
                saveUser(email, name)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }

   // login Process
    const loginProcess = ( email, password, location, history) => {
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

    const saveUser = (email, displayName) =>{
        const user = {email, displayName}
        fetch('https://fierce-hollows-37330.herokuapp.com/newusers',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    
    return { user, error, logout, SignInWithGoogle, registerProcess, loginProcess,  isLoading , admin}
}

export default FirebaseAuth;

