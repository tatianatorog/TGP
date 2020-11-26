import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import ListDocument from '../components/listDocument';
import { Button, Table } from "react-bootstrap";
import MydModalWithGrid from "../components/addTask";
import MenuNav from '../components/menu';
import '../style/documentDetail.css';
import FrontBar from "../components/frontbar";
import {db} from "../firebase/firebase.config"


export default function DocumentDetail() {
    const { allDoc } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const viewDoc = localStorage.getItem('file');

    const document = allDoc.find(doc => doc.id === viewDoc);
    const [tareas, setTareas] = useState([]);
    const idC=  document.id

  useEffect(() => {
    db.collection('documents').doc(idC)
    .collection('tareas')
      .onSnapshot((querySnapshot) => {
        const arrayData = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          arrayData.push({ ...data, idTask: doc.id })
        })
        setTareas(arrayData);
      })
  }, [])

  
console.log(tareas)

    return (
        <section className='documentDetail-container'>
            <MenuNav />
    
            <div className='document-detail-main'>
                <FrontBar />
                <div className='documentDetail-container'>
                { document &&
                <div className='description-document'>
                    <h1 className="input-form">{document.tema}</h1>
                    <ListDocument data={document} />
                    <Table>
                        <tbody>
                            <tr>
                                <td>Monto de Contingencia</td>
                                <td className="input-form" >{document['monto']}</td>
                            </tr>
                            <tr>
                                <td>Archivos Adjuntos</td>
                                <td className="input-form">
                                   { document.archivo && <a href={document.archivo} target="blank">{document.expediente}</a>}
                                   { document.link && <a href={document.link} target="blank">{document.expediente}</a>}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                }
                <div>
                <Button variant="primary" className="add" onClick={() => setModalShow(true)}>
                    AGREGAR TAREA
                </Button>
                    </div> 
                <MydModalWithGrid   show={modalShow} onHide={() => setModalShow(false)}  idDoc={document.id} exp={document.expediente} />
            </div>
            <div className='taskDetail-container'>
                <Table className="table table-bordered">
                <thead className="header">
                    <tr>
                        <th>Estado</th>
                        <th>Drescripción</th>
                        <th>Área Encargada</th>
                        <th>Fecha</th>
                        <th/>
                    </tr>
                </thead>
                <tbody className="table-body"> 
                    {document && tareas.map(dataTask => (
                        <tr>
                        <td className="input-form" >{dataTask.completada}</td>
                        <td className="input-form">{dataTask.descripcion}</td>
                        <td className="input-form">{dataTask.areaEncargada}</td>
                        <td className="input-form">{dataTask.fechaPlazo}</td>
                        <td>
                        <Button variant="link">Editar</Button>
                      </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
            </div>
            </div>
        </section>
    )
}
