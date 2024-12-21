import React from "react";

function Header() {
  return (
    <header className="site-header">
      <img
        src="/images/Molloy_University_logo.png"
        alt="Molloy University Logo"
        className="header-logo"
      />
      <h1>Safety with Cybersecurity</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#helpful-tips">Tips</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#threats">Threats</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
