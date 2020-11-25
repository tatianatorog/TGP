import React, { useContext } from 'react';
import { AuthContext} from '../context/AuthContext';
import ListDocument from '../components/listDocument'



export default function DocumentDetail() {
    const { viewDoc, allDoc } = useContext(AuthContext);

    const document = allDoc.find(doc => doc.id === viewDoc);

    return (
        <section>
            <ListDocument data={document}/>
        </section>
    )
}
