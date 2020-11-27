import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ListDocument from "../components/listDocument";
import { Button, Table } from "react-bootstrap";
import MydModalWithGrid from "../components/addTask";
import MenuNav from "../components/menu";
import "../style/documentDetail.css";
import FrontBar from "../components/frontbar";
import ModalAddCont from '../components/modalCont';
import { db } from "../firebase/firebase.config";
import ModalEditTask from "../components/modalEditTask";




export default function DocumentDetail() {
  const { allDoc } = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [showEdit, setEdit] = useState(false);
 
  const viewDoc = localStorage.getItem("file");

  const document = allDoc.find((doc) => doc.id === viewDoc);
  const [tareas, setTareas] = useState([]);
  const idC = document.id;

  useEffect(() => {
   const colecion = db.collection("documents")
   colecion.doc(idC)
      .collection("tareas")
      .onSnapshot((querySnapshot) => {
        const arrayData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          arrayData.push({ ...data, idTask: doc.id });
        });
        setTareas(arrayData);
      });
    return colecion  
  }, []);

  
   
  return (
    <section className="documentDetail-container">
      <MenuNav />

      <div className="document-detail-main">
        <FrontBar />
        <div className="documentDetail-container">
          {document && (
            <div className="description-document">
              <h1 className="input-form">{document.tema}</h1>
              <ListDocument data={document} />
              <Table>
                <tbody>
                  <tr>
                    <td>Monto de Contingencia</td>
          <td className="input-form">s/{document.cantidad} soles - {document.comentario}</td>
                  </tr>
                  <tr>
                    <td>Archivos Adjuntos</td>
                    <td className="input-form">
                      {document.archivo && (
                        <a href={document.archivo} target="blank">
                          {document.expediente}
                        </a>
                      )}
                      {document.link && (
                        <a href={document.link} target="blank">
                          {document.expediente}
                        </a>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )}
          <div>
            <Button
              variant="primary"
              className="add"
              onClick={() => setModalShow(true)}
            >
              AGREGAR TAREA
            </Button>
            <Button variant="primary" className="add" onClick={() => setModalShow1(true)}>
                    MONTO DE CONTINGENCIA
            </Button>
          </div>
          <MydModalWithGrid
            show={modalShow}
            onHide={() => setModalShow(false)}
            idDoc={document.id}
            tema={document.tema}
          />
        </div>
        <div className="taskDetail-container">
          <Table className="table table-bordered">
            <thead className="header">
              <tr>
                <th>Estado</th>
                <th>Descripción</th>
                <th>Área Encargada</th>
                <th>Fecha</th>
                <th />
              </tr>
            </thead>
            <tbody className="table-body">
              {document &&
                tareas.map((dataTask) => (
                  <tr key={dataTask.id}>
                    <td className="input-form">{dataTask.completada}</td>
                    <td className="input-form">{dataTask.descripcion}</td>
                    <td className="input-form">{dataTask.areaEncargada}</td>
                    <td className="input-form">{dataTask.fechaPlazo}</td>
                    <td>
                   
                  <MydModalWithGrid   show={modalShow} onHide={() => setModalShow(false)}  idDoc={document.id} exp={document.expediente} />
                <ModalAddCont   show={modalShow1} onHide={() => setModalShow1(false)}  idDoc={document.id} exp={document.expediente} />
                      <Button  key={dataTask.id} variant="link" onClick={() => setEdit(true)}>
                        Editar
                      </Button>
                      <ModalEditTask
                      key={dataTask.id}
                        shows={showEdit}
                        onHides={() => setEdit(false)}
                        idTask={dataTask.idTask}
                        titulo={dataTask.descripcion}
                        area={dataTask.areaEncargada}
                        fechaLimite={dataTask.fechaPlazo}
                      //  mod={dataTask.modificacion} 
                        idDocu={document.id}
                      />
                    </td>
            
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
}
