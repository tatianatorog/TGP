import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import ListDocument from '../components/listDocument';
import { Button, Table } from "react-bootstrap";
import MydModalWithGrid from "../components/addTask";
import MenuNav from '../components/menu';
import '../style/documentDetail.css'






export default function DocumentDetail() {
    const { viewDoc, allDoc } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);


    const document = allDoc.find(doc => doc.id === viewDoc);

    return (
        <section className='documentDetail-container'>
            <MenuNav/>
            <div className='description-document'>
                <h1>{document.tema}</h1>
                <ListDocument data={document} />
                <Table>
                    <tbody>
                    <tr>
                        <td>Monto de Contingencia</td>
                        <td><div contentEditable style={{width: 200}}>{document['monto']}</div></td>
                    </tr>
                    <tr>
                        <td>Archivos Adjuntos</td>
                        <td>
                            <tr><a href={document.archivo} target="_blank">File</a></tr>
                            <tr><a href={document.archivo}>File</a></tr></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Agregar tarea
        </Button>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />

        </section>
    )
}
