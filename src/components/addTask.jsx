import { Button,Col, Row, Form,Container, Modal } from "react-bootstrap";
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
             
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value=""
                onChange=""
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
                  
                >
                  <option>Selecciona...</option>
                  <option>OSINERGMIN</option>
                  <option>OEFA</option>
                  <option>MINEM</option>
                </Form.Control>
            </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col >
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
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

  export default MydModalWithGrid