import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portfolio from './components/portfolio';
import Travel from './components/travel';
import DailyLogs from './components/daily';
import Algorithms from './components/algorithms';

const useStyles = makeStyles((theme) => ({
  root:{
    background: 'linear-gradient(90deg, rgba(3,1,29,1) 0%, rgba(28,1,64,1) 39%, rgba(1,39,46,1) 70%, rgba(61,34,1,1) 100%)',
    marginTop:80,
    marginLeft:80,
    borderRadius:"5px"
    
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div >
      <Container>
      <Router>
        
        <NavBar/>
        <div className={classes.root}>
        <Switch>
          {/* <Route exact path="/" component={Home}></Route> */}
          <Route exact path="/Navshikha/" component={Portfolio}></Route>
          <Route exact path="/Navshikha/travel" component={Travel}></Route>
          <Route exact path="/Navshikha/logs" component={DailyLogs}></Route>
          <Route exact path="/Navshikha/algorithms" component={Algorithms}></Route>
        </Switch>
        </div>
        
       
      
      </Router>
      </Container>
      
    </div>
  );
}

export default App;
