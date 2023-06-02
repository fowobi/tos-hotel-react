import React from "react";

const Footer = ({ address }) => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        {address.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
