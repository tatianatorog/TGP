import './App.css';
import { AuthProvider } from './context/AuthContext';
import SignUp  from './pages/signUp';
import LogIn from './pages/login'

function App() {
  return (
   <AuthProvider>
    <p>TGP</p>
    <LogIn/>
    <SignUp/>
    </AuthProvider>
  );
}

export default App;
