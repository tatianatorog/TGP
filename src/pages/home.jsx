import React, { useContext } from 'react';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext} from '../context/AuthContext'
import "../style/dataTable.css";
import "../style/home.css";
import MenuNav from '../components/menu';
import add from '../img/add.png';
import user from '../img/user.png';

function DataTable() {
  const { allDoc, setviewDoc } = useContext(AuthContext);
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleFileRedirect = (file) => {
    setviewDoc(file);
    history.push('/documentDetail');
  }
    const addDataTable = () => {
      history.push('/dataTable');
    };

    function searchingTerm(term) {
      return function (x) {
        return x.entidad.toLowerCase().includes(term.toLowerCase()) ||
          x.expediente.includes(term) || x.motivo.toLowerCase().includes(term.toLowerCase()) || x.tema.toLowerCase().includes(term.toLowerCase()) ||
          !term;

      };
    }

    return (
      <div className="page">
        <MenuNav />
        <div className="row">
          <div className="card">
          </div>
          <div>
            <div className="card wrapper">
              <form className="nav nav-tabs" id="nav-tab" role="tablist">
                <input className="form-control form-searcher" name="term" maxLength="16" onChange={e => setTerm(e.target.value)} placeholder="Buscar" />
                <p className="icon-user">Nombre de usuario<img src={user} alt="user" /></p>
              </form>
              <div>
                <button className="btn add" onClick={addDataTable}><img src={add} alt="" />Agregar documento</button>
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
                  {allDoc.filter(searchingTerm(term)).map(i => {
                    // console.log(i);
                    return <tr key={i.id}>
                      <td className="box-container">{i.entidad}</td>
                      <td>{i.expediente}</td>
                      <td>{i.motivo}</td>
                      <td>{i.tema}</td>
                      <td>{i.fecha_entrada}</td>
                      <td><Button variant="link" >Detalles</Button></td>
                      <td><Button variant="link" onClick={() => handleFileRedirect(i.id)}>Ver todo</Button></td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default DataTable;
