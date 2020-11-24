import './App.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home'
import SignUp from './pages/signUp';
import LogIn from './pages/login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/"component={Home}/>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
