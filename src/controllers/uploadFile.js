

//  const uploadFile = (file, uid) => {
//     const refStorage = firebase.storage().ref(`imgsPosts/${uid}/${file.name}`);
//     const task = refStorage.put(file);
  
//     task.on(
//       'state_changed',
//       (snapshot) => {
//         const porcentaje = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//         localStorage.setItem('uploadImage', porcentaje);
//       },
//       (error) => {
//         alert(error);
//       },
//       () => {
//         task.snapshot.ref
//           .getDownloadURL()
//           .then((url) => {
//             localStorage.setItem('imgNewPost', url);
//           })
//           .catch((error) => {
//             alert(error);
//           });
//       },
//     );
//   };

//   export {uploadFile};