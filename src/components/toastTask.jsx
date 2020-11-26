import React, {useState} from 'react';
import { Toast } from "react-bootstrap";


export default function ToastTask({time, area, topic}) {
    const [show, setShow] = useState(true);

    return (
        <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto"> {time} días para caducar</strong>
          </Toast.Header>
    <Toast.Body>Tarea de {topic} desarrollada por {area}</Toast.Body>
        </Toast>
    )
}
