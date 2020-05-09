import React from "react";
import './Footer.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
class Footer extends React.Component {
  render() {
    return (
      <Router>
        <div className="foo">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container">


              <div className="footer-copyright text-center py-3 bg-dark">© 2020 Copyright:
    <Link href="#"> @abhishekkumar</Link>
              </div>
              <div className="f-icon">
             <a href="https://www.facebook.com/Abhishek-E-Bussiness-103946337986234/" target="_blank" rel="noopener noreferrer" ><i class="fa fa-facebook" ></i></a>
             <a href="https://www.linkedin.com/in/abhishek-kumar-64ba99129" target="_blank" rel="noopener noreferrer" ><i class="fa fa-linkedin"></i></a>
              <a href=" tel: +919113107737" ><i class="fa fa-phone"></i></a>
              <a href="https://goo.gl/maps/x1uFXovGgia8DiEx5" target="_blank" rel="noopener noreferrer" ><i class="fa fa-map-marker"></i></a>
              </div>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}
export default Footer;