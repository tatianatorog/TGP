import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import ListDocument from '../components/listDocument';
import { Button, Table } from "react-bootstrap";
import MydModalWithGrid from "../components/addTask";
import MenuNav from '../components/menu';
import '../style/documentDetail.css';
import FrontBar from "../components/frontbar";


export default function DocumentDetail() {
    const { allDoc } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const viewDoc = localStorage.getItem('file');

    const document = allDoc.find(doc => doc.id === viewDoc);
   

    return (
        <section className='documentDetail-container'>
            <MenuNav />
            <div className='document-detail-main'>
                <FrontBar />
                <div className='documentDetail-container'>
                { document &&
                <div className='description-document'>
                    <h1>{document.tema}</h1>
                    <ListDocument data={document} />
                    <Table>
                        <tbody>
                            <tr>
                                <td>Monto de Contingencia</td>
                                <td><div contentEditable style={{ width: 200 }}>{document['monto']}</div></td>
                            </tr>
                            <tr>
                                <td>Archivos Adjuntos</td>
                                <td>
                                    <a href={document.archivo} target="blank">File</a>
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
                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
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
                    {document && document['tareas'].map(dataTask => (
                        <tr>
                        <td>dataTask.estado</td>
                        <td>dataTask.descripcion</td>
                        <td>dataTask.area</td>
                        <td>dataTask.fecha</td>
                        <td>detalles</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
            </div>
            </div>
        </section>
    )
}
