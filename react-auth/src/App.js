// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./components/login.component";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          
        
          <div className="auth-wrapper">
              <div className="auth-inner">
                  <Switch>
                    
                    <Route exact path="/login" component={Login} />
                    

                  </Switch>
              </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
