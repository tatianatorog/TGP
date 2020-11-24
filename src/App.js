import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PriveteRoute from "./components/priveteRoute";
import SignUp from "./pages/signUp";
import LogIn from "./pages/login";
import home from "./pages/home";
import React from "react";
import formUpload from "./pages/form";



function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PriveteRoute exact path="/" route={home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <PriveteRoute path="/dataTable" route={formUpload}>
           
          </PriveteRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
