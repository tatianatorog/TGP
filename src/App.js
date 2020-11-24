import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PriveteRoute from "./components/priveteRoute";
import SignUp from "./pages/signUp";
import LogIn from "./pages/login";
import Upload from "./components/Upload";
import React from "react";
import Home from "./pages/home";
import DataTable from "./pages/dataTable";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PriveteRoute exact path="/" route={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
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
