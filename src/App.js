import logo from './logo.png';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
//import Statedata from './Components/Statedata';

   import
  {
    BrowserRouter as Router,
    Route,
    Switch,   
  }from 'react-router-dom';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state ={

    }
  }


render()
{
  return(

    <Router>

    <Header/> 
    <Switch>
    <Route exact path="/"><India/></Route>
    <Route path="/india"><India/></Route>
    <Route path="/world"><World/></Route>    
    </Switch>
    
    
    </Router>

  )
}


}

export default App;
