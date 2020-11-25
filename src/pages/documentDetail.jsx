import React, { useContext, useState } from 'react';
import { AuthContext} from '../context/AuthContext';
import ListDocument from '../components/listDocument';
import { Button } from "react-bootstrap";
import MydModalWithGrid from "../components/addTask"



export default function DocumentDetail() {
    const { viewDoc, allDoc } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);


    const document = allDoc.find(doc => doc.id === viewDoc);

    return (
        <section>
            <ListDocument data={document}/>
            <Button variant="primary" onClick={() => setModalShow(true)}>
          Agregar tarea
        </Button>
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />

        </section>
    )
}
