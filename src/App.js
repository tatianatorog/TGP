import './App.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PriveteRoute from './components/priveteRoute';
import Home from './pages/home';
import SignUp from './pages/signUp';
import LogIn from './pages/login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PriveteRoute exact path="/" route={Home}/>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
