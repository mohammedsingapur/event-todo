import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './Components/Welcome';
import Signup from './Components/Signup'
import Home from './Components/Home'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { Fragment } from 'react';
import Add from './Components/Add'
import List from './Components/List'
import Feedback from './Components/Feedback'

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Router>
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route exact path="/dashboard" render={()=>
            <Fragment>
              <Dashboard/>
              <List/>
            </Fragment>
          } />
          <Route path="/dashboard/add" render={()=>
            <Fragment>
              <Dashboard/>
              <Add/>
            </Fragment>
          } />
          <Route path="/dashboard/feedback" render={()=>
            <Fragment>
              <Dashboard/>
              <Feedback/>
            </Fragment>
          } />
          <Route path="/login" component={Login}/>
          {/* <Route path="/dashboard/add" component={Add} />
          <Route path="/dashboard/list" component={List} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
