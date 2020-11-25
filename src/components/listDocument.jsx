import React from 'react';
import { Table } from 'react-bootstrap';
import '../style/listDocument.css'

export default function ListDocument({ data }) {
    return (
        <div className='description-document'>
            <h1>{data.tema}</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>Entidad</td>
                        <td>{data.entidad}</td>
                    </tr>
                    <tr>
                        <td>No.Expedinete</td>
                        <td>{data.expediente}</td>
                    </tr>
                    <tr>
                        <td>Motivo</td>
                        <td>{data.motivo}</td>
                    </tr>
                    <tr>
                        <td>Tema</td>
                        <td>{data.tema}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Recepción</td>
                        <td>{data['fecha_entrada']}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Vencimiento</td>
                        <td>{data['fecha_expiracion']}</td>
                    </tr>
                    <tr>
                        <td>Área Encargada</td>
                        <td>{data['Area']}</td>
                    </tr>
                    <tr>
                        <td>Otros</td>
                        <td>{data['Otros']}</td>
                    </tr>
                    <tr>
                        <td>Monto de Contingencia</td>
                        <td><div contentEditable>{data['monto']}</div></td>
                    </tr>
                <tr>
                    <td>Archivos Adjuntos</td>
                    <td> 
                    <tr><a href={data.archivo} target="_blank">File</a></tr>
                    <tr><a href={data.archivo}>File</a></tr></td>
                </tr>
                </tbody>
            </Table>
        </div >
    )
}
