import React, { createContext } from 'react';
import FirebaseAuth from '../hooks/useFirebase';


export const ContextApi = createContext()
const AuthProvider = ({children}) => {
    const allProvider = FirebaseAuth()
    return (
        <ContextApi.Provider value={allProvider}>
            {children}
        </ContextApi.Provider>
    );
};

export default AuthProvider;