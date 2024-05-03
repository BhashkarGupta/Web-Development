import React from "react";

function getCurrentYear() {
  const year = new Date().getFullYear();
  return year;
}

function Footer() {
  return (
    <footer>
      <p>Copyright © {getCurrentYear()}</p>
    </footer>
  );
}

export default Footer;
