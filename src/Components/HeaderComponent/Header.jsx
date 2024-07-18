import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import 'fonts/dist/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderStyles.css';

 
export const Header = () => {
  return (
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm border-bottom" style={{marginBottom: '0px'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> {/* Assuming you want to link to the homepage */}
            <ul className="d-flex align-items-center">
              <li>
                <img src={`${process.env.PUBLIC_URL}/img/companylogo.png`} alt="Logo" />
              </li>
              <li>
                  <h5 style={{color: '#0c263a'}}>Full Stack</h5>
                  <p>Web Developer</p>
              </li>
            </ul>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="nav navbar-nav ml-auto">
          </ul>  
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/" style={{color: '#fff'}}><i className='fa fa-home'></i> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/Portfolio"><i className='fa fa-briefcase'></i> Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/About"><i className='fa fa-user'></i> About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/Contact"><i className='fa fa-phone'></i> Contact</a>
            </li>
          </ul>
            {/* If _LoginPartial is a component, import it and render it here */}
            {/* <_LoginPartial /> */}
          </div>
        </div>
      </nav>
  );
}
