import React, { useState } from 'react';
import { logIn } from '../firebase/auth'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
       
    }

    return (
        <section className='login'>
            <h1>Bienvenido a la Aplicación</h1>
            <form onClick={handleSubmit}>
                <h1>Iniciar Sesión</h1>
                <label htmlFor="email">
                    Correo electrónico
                    <input type="email" id='email' required onChange={e => setEmail(e.target.value)} placeholder="mdiaz@tgp.com.pe" />
                </label>
                <label htmlFor="password">
                    Contraseña
                    <input type="password" id='password' required onChange={e => setPassword(e.target.value)} />
                </label>
                <button >Ingresar</button>
                <p>{error}</p>
                <a href='recover'> Recuperar Contraseña </a>
                <a href='register'> Registrarse </a>
            </form>
        </section>
    )
}
