import React from 'react';
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
      <div className="Footer">
            <Navbar bg="dark" variant="dark">
                <div className="center" href="#home">2020 Copyright &copy;</div>
            </Navbar>
      </div>
    );
  }
  
  export default Footer;