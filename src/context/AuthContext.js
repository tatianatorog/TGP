import React, { useState, useEffect} from 'react';
import { auth } from '../firebase/firebase.config'

const AuthContext = React.createContext()

export  function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
       const unsubcribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubcribe
    },[])
    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}
