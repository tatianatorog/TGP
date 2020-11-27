import {firebase} from '../firebase/firebase.config';

const addUser = (user) => firebase.firestore().collection('documents').add(user);

const getUserById = (userId) => firebase.firestore().collection('documents').doc(userId).get();

const updateUser = (userId, user) => firebase.firestore().collection('documents').doc(userId).update(user);

const getUsers = (callback) => firebase.firestore().collection('documents')
  .onSnapshot({ includeMetadataChanges: true }, ((snap) => {
    const gettingUsers = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(gettingUsers);
  }));

  const getTaskNot = (callback) => firebase.firestore().collectionGroup('tareas').where('completada', '==', 'No completada')
      .onSnapshot({ includeMetadataChanges: true }, ((snap) => {
    const gettingUsers = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    callback(gettingUsers);
  }));


  /*useEffect(() => {
    const colecion = db.collection("documents")
    colecion.doc(idC)
       .collection("tareas")
       .onSnapshot((querySnapshot) => {
         const arrayData = [];
         querySnapshot.forEach((doc) => {
           const data = doc.data();
           arrayData.push({ ...data, idTask: doc.id });
         });
         setTareas(arrayData);
       });
     return colecion  
   }, [idC]);*/


  const getData = (callback) => firebase.firestore().collection('documents')
  .onSnapshot({ includeMetadataChanges: true }, ((snap) => {
    const gettingUser = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(gettingUser);
  }));

  const addSub =(idDoc, data) => {
    firebase.firestore().collection('documents').doc(idDoc).collection('tareas').add(
     data
    )
  };

export { addUser, getUserById, updateUser, getUsers, addSub, getTaskNot,getData};
