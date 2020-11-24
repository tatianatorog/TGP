import React, { useState, useRef } from 'react';
import { logIn } from '../firebase/auth';
import {Link, useHistory} from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState();
    const [buttonlog, setButtonlog] = useState(false);
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();

       if (!new RegExp(/(@tgp\.com\.pe)$/).test(emailRef.current.value)) {
        return setError('Correo electrónico no válido se requiere un correo de TPG');
        }

        try {
            setError('');
            setButtonlog(true);
            await logIn(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch {
            setError('No se puede iniciar sesión');
        }
        setButtonlog(false);
    }

    return (
        <section className='login'>
            <h1>Bienvenido a la Aplicación</h1>
            <form onSubmit={handleSubmit}>
                <h1>Iniciar Sesión</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <label htmlFor="email">
                    Correo electrónico
                    <input type="email" id='email' required ref={emailRef} placeholder="mdiaz@tgp.com.pe" />
                </label>
                <label htmlFor="password">
                    Contraseña
                    <input type="password" id='password' required ref={passwordRef} />
                </label>
                <button disabled={buttonlog}>Ingresar</button>
                <p>{error}</p>
                <Link to='/recover'> Recuperar Contraseña </Link>
                <Link to='/signup'> Registrarse </Link>
            </form>
        </section>
    )
}
