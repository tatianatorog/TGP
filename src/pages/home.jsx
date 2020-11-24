import React, { useState }from 'react';
import { useHistory } from 'react-router-dom';
import { signOut } from '../firebase/auth';

export default function Home() {
    const [error, setError] = useState();
    const history = useHistory();

    const handleLogOut = async() => {
        try {
            setError('');
            await signOut();
            history.push('/login');
        } catch {
            setError('No se puede cerrar sesión');
        }
        
    }

    return (
        <div>
            <h1>home</h1>
            <button onClick={handleLogOut}>Cerrar Sesión</button>
        </div>
    )
}
