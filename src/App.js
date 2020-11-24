
import React from 'react';
import Home from './pages/home';
import DataTable from './pages/dataTable'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/dataTable" >
          <DataTable/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
