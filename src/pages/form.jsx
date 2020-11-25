import React, { useState } from "react";
import { storage } from "../firebase/firebase.config";
import { addUser } from "../controllers/user";
import { useHistory } from "react-router-dom";
import { Button, Form, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/form.css";

export default function FormUpload() {
  const history = useHistory();
  const [url, setURL] = useState("");
  const [entity, setEntity] = useState("");
  const [record, setRecord] = useState("");
  const [topic, setTopic] = useState("");
  const [area, setArea] = useState("");
  const [nowDate, setNowDate] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const [reason, setReason] = useState("");
  const [others, setOthers] = useState("");
  const [labels, setLabels] = useState("");
  const [file, setFile] = useState(null);

  const handleEntity = (e) => setEntity(e.currentTarget.value);
  const handleRecord = (e) => setRecord(e.currentTarget.value);
  const handleTopic = (e) => setTopic(e.currentTarget.value);
  const handleArea = (e) => setArea(e.currentTarget.value);
  const handleNowDate = (e) => setNowDate(e.currentTarget.value);
  const handleExpiredDate = (e) => setExpiredDate(e.currentTarget.value);
  const handleReason = (e) => setReason(e.currentTarget.value);
  const handleOthers = (e) => setOthers(e.currentTarget.value);
  const handleLabels = (e) => setLabels(e.currentTarget.value);

  function handleUpload(file) {
    const uploadTask = storage.ref(`oficios/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("oficios")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setURL(url);
        });
    });
  }

  function handleChange(e) {
    const file = e.target.files[0];
    handleUpload(file);
    setFile(file);
  }

  // function addDocument(data) {
  //   db.collection("expedientes").add(data);
  // }

  function handleSend() {
    const info = {
      entidad: entity,
      expediente: record,
      tema: topic,
      Area: area,
      fecha_entrada: nowDate,
      fecha_expiracion: expiredDate,
      motivo: reason,
      Otros: others,
      etiquetas: labels,
      archivo: url,
    };

    addUser(info)
    .then((docRef) => {
     history.push({
    pathname: "/home",
    state: { userId: docRef.id },
      });
    });

    setEntity("");
    setRecord("");
    setReason("");
    setTopic("");
    setArea("");
    setNowDate("");
    setExpiredDate("");
    setReason("");
    setOthers("");
    setLabels("");
    setFile(null);
  }

  return (
    <div>
      <Container className="container-form">
        <h2 className="title-form">AGREGAR DOCUMENTO</h2>
        <p>Ingresa los datos solicitados y luego presiona GUARDAR</p>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Entidad</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={handleEntity}
              >
                <option>Selecciona...</option>
                <option>OSINERGMIN</option>
                <option>OEFA</option>
                <option>MINEM</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Número de Expediente</Form.Label>
              <Form.Control
                type="number"
                value={record}
                onChange={handleRecord}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Tema</Form.Label>
              <Form.Control value={topic} onChange={handleTopic} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Motivo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={reason}
              onChange={handleReason}
              required
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Area legal encargada</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={handleArea}
              >
                <option>Selecciona...</option>
                <option>TGP</option>
                <option>COGA</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Fecha de recepción</Form.Label>
              <Form.Control
                type="date"
                value={expiredDate}
                onChange={handleExpiredDate}
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Fecha de vencimiento</Form.Label>
              <Form.Control
                type="date"
                value={nowDate}
                onChange={handleNowDate}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Otros</Form.Label>
              <Form.Control value={others} onChange={handleOthers} required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Agregar etiquetas</Form.Label>
              <Form.Control value={labels} onChange={handleLabels} required />
            </Form.Group>

            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Sube el documento"
                type="file"
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Button
            className="btn-form"
            variant="primary"
            disabled={
              !file ||
              !url ||
              !entity ||
              !record ||
              !topic ||
              !area ||
              !nowDate ||
              !expiredDate ||
              !reason 
            }
            onClick={handleSend}
          >
            Guardar
          </Button>
        </Form>
      </Container>
    </div>
  );
}
