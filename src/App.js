import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PriveteRoute from "./components/priveteRoute";
import SignUp from "./pages/signUp";
import LogIn from "./pages/login";
import Recover from "./pages/recover";
import Upload from "./components/Upload";
import Home from "./pages/home";
import DataTable from "./pages/dataTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/recover" component={Recover} />
          <PriveteRoute exact path="/" route={Home} />
          <PriveteRoute path="/form" route={Upload} />
          <Route path="/dataTable">
            <DataTable />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
