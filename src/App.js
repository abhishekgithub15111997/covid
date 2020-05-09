import React from 'react';
import {News,India,Important,Notfound } from "./components";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom' ;
import Home from './Home';
class App extends React.Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
                        <div className="container">
                        {/* "#01DF74" */}
                            <div class="contact-section">
                                <h2 class="ct-section-head" style={{ fontSize: 15, color: 'red' }}> <i className="fa fa-drupal" style={{ fontSize: 25 , marginRight:10}}></i>{"  "}{" "}CORONA-TRACKER</h2></div>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav" >
                                <ul className="navbar-nav ml-auto"  >
                                    <li className="nav-item active ">
                                        <Link className="nav-link " to={'/'} exact style={{ color: "white" }} >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to={'/corona-india'}   style={{ color: "white" }}>India_Corona</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to={'/corona-news'}   style={{ color: "white" }}>News_Feed</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to={'/needs-to-do'}  style={{ color: "white" }}>About_Corona</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/corona-india' component={India} />
              <Route path='/corona-news' component={News} />
              <Route path='/needs-to-do' component={Important} />
              <Route component={Notfound} />  
          </Switch>
        </div>
        {/* <Footer/> */}
      </Router>
    );
  }
}

export default App;
