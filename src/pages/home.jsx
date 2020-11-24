/* import React, { useState }from 'react';
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
} */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { addUser } from '../controllers/user';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const history = useHistory();
  const [entidad, setEntidad] = React.useState('');
  const [expediente, setExpediente] = React.useState('');
  const [motivo, setMotivo] = React.useState('');
  const [tema, setTema] = React.useState('');
  const [date, setDate] = React.useState('');


  const [errorEntidad, setErrorEntidad] = React.useState('');
  const [errorExpediente, setErrorExpediente] = React.useState('');
  const [errorMotivo, setErrorMotivo] = React.useState('');
  const [errorTema, setErrorTema] = React.useState('');

  const submitData = () => {

    if (entidad === '') {
      setErrorEntidad('El nombre de la entidad es requerido');
    }

    if (expediente === '') {
      setErrorExpediente('El número de expediente es requerido');
    }

    if (motivo === '') {
      setErrorMotivo('El motivo de la sanción es requerido');
    }

    if (tema === '') {
      setErrorTema('El tema es requerido');
    }

   

    if (entidad !== '' && expediente !== '' && motivo !== '' && tema !== '') {
      const registerNewDocument = {
        entidad: entidad,
        expediente: expediente,
        motivo: motivo,
        tema: tema,
        date: date,
      };

      addUser(registerNewDocument)
        .then((docRef) => {
          history.push({
            pathname: '/dataTable',
            state: { userId: docRef.id }
          });
        });
    }
  }

    return(
      <div className="container" >
          <div className="card text-center">
         <div className="labels-date">
          <label>Entidad</label>
          <input type="text" onChange={e => setEntidad(e.target.value)} placeholder="Ingrese entidad" value={entidad} />
          {errorEntidad !== "" ? (
          <span class="alert">{errorEntidad}</span>
        ) : (<span></span>)}
        </div>
      
        <div className="labels-date">
          <label>Número de Expediente</label>
          <input type="text" onChange={e => setExpediente(e.target.value)} placeholder="Ingrese N° de expediente" value={expediente} />
          {errorExpediente !== "" ? (
          <span class="alert">{errorExpediente}</span>
        ) : (<span></span>)}
        </div>

        <div className="labels-date">
          <label>Motivo</label>
          <input type="text" onChange={e => setMotivo(e.target.value)} placeholder="Resolución" value={motivo} />
          {errorMotivo !== "" ? (
          <span class="alert">{errorMotivo}</span>
        ) : (<span></span>)}
        </div>
       
        <div className="labels-date">
          <label>Tema</label>
          <input type="text" onChange={e => setTema(e.target.value)} placeholder="Descripción" value={tema} />
          {errorTema !== "" ? (
          <span class="alert">{errorTema}</span>
        ) : (<span></span>)}
        </div>

        <div className="labels-date">
          <label>Fecha de recepción</label>
          <input type="date" onChange={e => setDate(e.target.value)} placeholder="DD/MM/AA" value={date} />
        </div>

        <div className="box-btnSolicitar">
          <button className="btn-solicite" onClick={submitData}>
            Registrar
          </button>
        </div>
        </div>  
      </div>
    )
  }
  
  export default Home
