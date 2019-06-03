import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Artists from './components/ArtistList';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {


  
  return (
    <Router>
    <div>
     
      <Switch>

        <Route exact path='/' component={Artists} />
      </Switch>

    </div>
  </Router>
  );
}

export default App;
