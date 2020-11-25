import React, { useContext } from 'react';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext} from '../context/AuthContext'

const DataTable = () => {
  const { allDoc, setviewDoc } = useContext(AuthContext);
  const [term,setTerm] = useState('');
  const history = useHistory();

  const handleFileRedirect = (file) => {
    setviewDoc(file);
    history.push('/documentDetail');
  }

  function searchingTerm(term){
      return function(x){
      return x.entidad.toLowerCase().includes(term.toLowerCase())||
      x.expediente.includes(term)||x.motivo.toLowerCase().includes(term.toLowerCase())||x.tema.toLowerCase().includes(term.toLowerCase())||
      !term;
      
      }
  }

  return(
    <>
       <form>
      <input name="term" maxLength="16" onChange={e => setTerm(e.target.value)} placeholder="buscar por..." autoFocus required />
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
            {allDoc.filter(searchingTerm(term)).map(i=>{
             // console.log(i);
              return <tr key={i.id}>
                <td>{i.entidad}</td>
                <td>{i.expediente}</td>
                <td>{i.motivo}</td>
                <td>{i.tema}</td>
                <td>{i.fecha_entrada}</td>
                <td><Button variant="link" onClick={() => handleFileRedirect(i.id)}>Ver todo</Button></td>
              </tr>
            })}
          </tbody>
        </table>
    </>
  )
}

export default DataTable;