
import { db} from "./firebase.config";

function addDocument(data) {
    db.collection('documents').add(data);
  }

  const updateTask = async (id, fields) => {
    try {
      await db.collection('documents').doc(id).update(fields);
    } catch (error) {
      console.log(error);
    }
  };
  
  function addSub(idDoc, exp, data){
  db.collection('users').doc(idDoc).collection('tareas').doc(exp).set(
   data
  )
}

  export  {
    addDocument,
    updateTask,
    addSub
  }

  