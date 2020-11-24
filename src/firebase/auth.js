import { auth } from './firebase.config';


export const signup = async (email, password, name) => {

      const newUser = await auth.createUserWithEmailAndPassword(email, password);
      const currentUser = await auth.currentUser;
      await currentUser.updateProfile({ displayName: name, });
      return newUser;
  }

export const logIn =  async (email, password) => {
     return await auth.signInWithEmailAndPassword(email, password);
  }

  export const recoverPass = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      return  `Hemos enviado un email a ${email} para cambiar la contraseña`;
    } catch (error) {
      return  'No se ha podido enviar el correo de verificación';
    }
  }

  export const signOut = async  () => {
    return await auth.signOut();  
  }