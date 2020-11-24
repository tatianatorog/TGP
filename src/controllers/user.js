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

export { addUser, getUserById, getUsers, updateUser };