import { Button, Col, Row, Form, Container, Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../style/addTask.css";
import { addSub } from "../controllers/user";
// import {}
import { db } from "../firebase/firebase.config";

export function MydModalWithGrid({ show, onHide, idDoc, exp }) {
  const [descripcion, setDescripcion] = useState("");
  const [fechaPlazo, setFechaPlazo] = useState("");
  const [areaEncargada, setAreaEncargada] = useState("");

  const handleDescripcion = (e) => setDescripcion(e.currentTarget.value);
  const handleFechaPlazo = (e) => setFechaPlazo(e.currentTarget.value);
  const handleAreaEncargada = (e) => setAreaEncargada(e.currentTarget.value);

  const handleClick = () => {
    addSub(idDoc, {
      descripcion,
      fechaPlazo,
      areaEncargada,
      completada: "No completada",
    });
    

    console.log(idDoc, exp);
  };
  

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p>{idDoc}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={descripcion}
                onChange={handleDescripcion}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Área encargada</Form.Label>
                <Form.Control
                  required
                  className="input-form"
                  as="select"
                  defaultValue="Choose..."
                  onChange={handleAreaEncargada}
                >
                  <option>Selecciona...</option>
                  <option>GERENCIA ABASTECIMIENTO</option>
                  <option>OEFA</option>
                  <option>MINEM</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  value={fechaPlazo}
                  onChange={handleFechaPlazo}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn add" onClick={handleClick}>
          {" "}
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
