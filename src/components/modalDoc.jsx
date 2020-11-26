
import React, {useState,useEffect} from 'react';
import { Table,Container, Modal } from "react-bootstrap";
import { getUsers} from '../controllers/user'
import "../style/modalDoc.css";


export function MydModalWrapperDoc(props,id) {

    const [detailsDocuments, setDetailsDocuments] = useState([]);
   

    useEffect(() => {
        setDetailsDocuments([]);
        getUsers(data=>setDetailsDocuments(data)
    );
        }, []);



    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Detalles de documento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
          <Table>
                <tbody>
                {detailsDocuments.map((i) => {
                  // console.log(i);
                  return (
                    <tr key={i.id}>
                        <tr>
                        <td>Entidad</td>
                        <td>{i.entidad}</td>
                       </tr>
                       <tr>
                        <td>No.Expediente</td>
                        <td>{i.expediente}</td>
                    </tr>
                    <tr>
                        <td>Motivo</td>
                        <td>{i.motivo}</td>
                    </tr>
                    <tr>
                        <td>Tema</td>
                        <td>{i.tema}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Recepción</td>
                        <td>{i['fecha_entrada']}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Vencimiento</td>
                        <td>{i['fecha_expiracion']}</td>
                    </tr>
                    <tr>
                        <td>Área Encargada</td>
                        <td>{i['Area']}</td>
                    </tr>
                    <tr>
                        <td>Otros</td>
                        <td>{i['Otros']}</td>
                    </tr>
                     
                    </tr>
                  );
                })}
                    
                </tbody>
            </Table>
  
          </Container>
        </Modal.Body>
       
      </Modal>
    );
  }

  export default MydModalWrapperDoc