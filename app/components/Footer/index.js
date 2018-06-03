import React from 'react';
import FooterTop from './FooterTop';
import FooterMiddle from './FooterMiddle';
import FooterBottom from './FooterBottom';

const footerStyle = {
  backgroundColor: '#172B24',
  paddingTop: '20px',
  paddingBottom: '20px',
};

const Footer = () => (
  <footer className="footer" style={footerStyle}>
    <div className="container-fluid text-white d-none d-md-block">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  </footer>
);

export default Footer;
