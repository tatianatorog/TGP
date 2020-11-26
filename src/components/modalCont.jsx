
import { Button, Modal, Container, FormControl, Form, Col, InputGroup,Table} from "react-bootstrap";
import "../style/modalCont.css";

function ModalAddCont(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="new" id="contained-modal-title-vcenter">
                    Agregar monto de contingencia
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                <Table>
                <InputGroup className="box" as={Col} controlId="formGridZip">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">S/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            placeholder="Ingrese monto"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="content">OBSERVACIONES</Form.Label>
                            <Form.Control 
                                as="textarea"
                            />
                        </Form.Group>
                    </Col>
                </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn add" onClick={props.onHide}>AGREGAR</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalAddCont;
