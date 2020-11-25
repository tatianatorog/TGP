
import { db} from "./firebase.config";

function addDocument(data) {
    db.collection('documents').add(data);
  }

  export  {
    addDocument
  }

  