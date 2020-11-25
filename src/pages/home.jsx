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
import { useState ,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { getUsers } from '../controllers/user';
//import { DatePicker } from 'antd';
//import 'antd/dist/antd.css'

const DataTable = () => {
  
  const [dataDoc,setData] = useState([]);
  const [term,setTerm] = useState('');

  function searchingTerm(term){
      return function(x){
      return x.entidad.toLowerCase().includes(term.toLowerCase())||
      x.expediente.includes(term)||x.motivo.toLowerCase().includes(term.toLowerCase())||x.tema.toLowerCase().includes(term.toLowerCase())||
      !term;
      
      }
  }


  useEffect(() => {
    setData([]);
    getUsers((data)=>setData(data))
  }, []); 

  return(
    <>
       <form>
      <input name="term" maxLength="16" onChange={e => setTerm(e.target.value)} placeholder="buscar por..." autofocus required />
       <button type="submit">ir</button>    
       </form>
       
       <table className="table table-bordered main">
          <thead>
            <tr>
              <th className="main">Entidad</th>
              <th>Número de Expediente</th>
              <th>Motivo</th>
              <th>Tema</th>
              <th>Fecha de recepción</th>
            </tr>
          </thead>
          <tbody>
            {dataDoc.filter(searchingTerm(term)).map(i=>{
             // console.log(i);
              return <tr key={i}>
                <td>{i.entidad}</td>
                <td>{i.expediente}</td>
                <td>{i.motivo}</td>
                <td>{i.tema}</td>
                <td>{i.fecha_entrada}</td>
              </tr>
            })}
          </tbody>
        </table>
    </>
  )
}

export default DataTable;
