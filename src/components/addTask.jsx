import { Button,Col, Row, Form,Container, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "../style/addTask.css";


export function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar tarea
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={6} md={4}>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="number"
                value=""
                onChange=""
                required
              />
            </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Área encargada</Form.Label>
              <Form.Control
                type="number"
                value=""
                onChange=""
                required
              />
            </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col >
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="number"
                value=""
                onChange=""
                required
              />
            </Form.Group>
              </Col>
            </Row>
  
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button classname="btn add"> Guardar</Button>
      </Modal.Footer>
      </Modal>
    );
  }
  
  function App() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Agregar tarea
        </Button>
  
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }
  export default App