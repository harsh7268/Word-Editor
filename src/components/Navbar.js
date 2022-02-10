import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode.color==='white'?'dark':'light'} bg-${props.mode.color==='white'?'dark':'light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutTxt}
           </Link>

            </li>
            
          </ul>
          <div style={{display:'flex'}}>
          <div className="mx-2" style={{height:'20px',width:'20px',borderRadius:'50%',backgroundColor:'rgb(170 46 221)',cursor:'pointer'}} onClick={() =>{props.showStyle('#361444')}}></div>
          <div className="mx-2" style={{height:'20px',width:'20px',borderRadius:'50%',backgroundColor:'grey',cursor:'pointer'}} onClick={() =>{props.showStyle('grey')}}></div>
          <div className="mx-2" style={{height:'20px',width:'20px',borderRadius:'50%',backgroundColor:'#ab3c3c',cursor:'pointer'}} onClick={() =>{props.showStyle('#ab3c3c')}}></div>
          <div className="mx-2" style={{height:'20px',width:'20px',borderRadius:'50%',backgroundColor:'yellow',cursor:'pointer'}} onClick={() =>{props.showStyle('yellow')}}></div>
          <div className="mx-2" style={{height:'20px',width:'20px',borderRadius:'50%',backgroundColor:'white',cursor:'pointer'}} onClick={() =>{props.showStyle('white')}}></div>
          </div>{/*
          <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="darkMode" onClick={() =>{props.showStyle('#361444')}}/>
        </div>
          */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutTxt: PropTypes.string };

Navbar.defaultProps ={
    title:'Set title here',
    aboutTxt:'about text here'
}
