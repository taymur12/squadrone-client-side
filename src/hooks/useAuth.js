import { useContext } from "react"
import { ContextApi } from "../Context/AuthProvider"


const useAuth = () =>{
    return useContext(ContextApi)
}

export default useAuth;