
import { db} from "./firebase.config";

function addDocument(data) {
    db.collection('expedientes').add(data);
  }

  export  {
    addDocument
  }