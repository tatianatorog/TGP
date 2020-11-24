import React, { useRef, useState } from 'react';
import { signup } from '../firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
   const registerNameRef = useRef();
   const registerEmailRef = useRef();
   const registerPasswordRef = useRef();
   const registerConfirmPasswordRef = useRef();
   const [error, setError] = useState();
   const [buttonlog, setButtonlog] = useState(false);
   const history = useHistory();

    const handleSubmit = async (e) => {
       e.preventDefault();

       if (!new RegExp(/(@tgp\.com\.pe)$/).test(registerEmailRef.current.value)) {
        return setError('Para registrarte debes usar un correo de TGP');
        }
        
        if(registerPasswordRef.current.value !== registerConfirmPasswordRef.current.value) {
            return setError('Las contraseñas no son iguales');
        }

        try {
            setError('');
            setButtonlog(true);
            await signup(registerEmailRef.current.value, registerPasswordRef.current.value, registerNameRef.current.value);
            history.push('/');
        } catch {
            setError('No se pudo crear la cuenta')
        }
        setButtonlog(false)
    }
     
    return (
        <section className='signup'>
            <form onSubmit={handleSubmit}>
                <h1>Crear Cuenta</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <label htmlFor="register-name">
                    Nombre
                    <input type="text" 
                    id='register-name' 
                    required 
                    placeholder="Mario Diaz"
                    ref={registerNameRef} />
                </label>
                <label htmlFor="register-email">
                    Correo electrónico
                    <input type="email"
                     id='register-email' 
                     required ref={registerEmailRef} 
                     placeholder="mdiaz@tgp.com.pe"
                     title='Para registrarte debes tener un correo de TGP'
                    />
                </label>
                <label htmlFor="register-password">
                    Contraseña
                    <input type="password" 
                    id='register-password' 
                    required 
                    pattern=".{6,}" 
                    title="Debe contener 6 o más carácteres"
                    ref={registerPasswordRef} />
                </label>
                <label htmlFor="register-password">
                    Confirmar Contraseña
                    <input type="password" id='register-confirm-password' required ref={registerConfirmPasswordRef} />
                </label>
                <button disabled={buttonlog}>Registrarse</button>
                <p>{error}</p>
                <Link to='/login'> Iniciar Sesión </Link>
            </form>
        </section>
    )
}
