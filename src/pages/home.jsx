import React from 'react';
import { useState ,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { getUsers } from '../controllers/user';
import "../style/dataTable.css";
import "../style/home.css";
import MenuNav from '../components/menu';
import add from '../img/add.png';
import FrontBar from "../components/frontbar"

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
    <div className="page">
     <MenuNav/>
    <div className="row">
      <div className="card">  
      </div>
      <div >
        <div className="card wrapper">
        <FrontBar
        searcher={<input  className="form-control form-searcher" name="term" maxLength="16" onChange={e => setTerm(e.target.value)} placeholder="Buscar" />}
        ></FrontBar>
        <div>
        <button className="btn add"><img src={add} alt=""/>Agregar documento</button>
        </div>
       <table className="table table-bordered">
          <thead className="header">
            <tr>
              <th>Entidad</th>
              <th>Número de Expediente</th>
              <th>Motivo</th>
              <th>Tema</th>
              <th>Fecha de recepción</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {dataDoc.filter(searchingTerm(term)).map(i=>{
             // console.log(i);
              return <tr key={i + i.expediente}>
                <td className="box-container">{i.entidad}</td>
                <td>{i.expediente}</td>
                <td>{i.motivo}</td>
                <td>{i.tema}</td>
                <td>{i.fecha_entrada}</td>
              </tr>
            })}
          </tbody>
        </table>
        </div>
        </div>
    </div>
    </div>
  )
}
export default DataTable;