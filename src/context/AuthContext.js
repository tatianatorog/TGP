import React, { useState, useEffect} from 'react';
import { auth } from '../firebase/firebase.config'
import { getUsers} from '../controllers/user'

export const AuthContext = React.createContext()

export  function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setloading] = useState(true);
    const [allDoc,setAllDoc] = useState([]);
    const [viewDoc, setviewDoc] = useState();
    
    useEffect(() => {
       const unsubcribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setloading(false)
        });
        if(currentUser) {
        getUsers((data)=>setAllDoc(data))
        }
        return unsubcribe
    },[currentUser]);


    return (
        <AuthContext.Provider value={{currentUser, allDoc, viewDoc, setviewDoc}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
