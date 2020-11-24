import React, { useState, useEffect} from 'react';
import { auth } from '../firebase/firebase.config'

export const AuthContext = React.createContext()

export  function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setloading] = useState(true)

    useEffect(() => {
       const unsubcribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setloading(false)
        })
        return unsubcribe
    },[])
    return (
        <AuthContext.Provider value={{currentUser}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
