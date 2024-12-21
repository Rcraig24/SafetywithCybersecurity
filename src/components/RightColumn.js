import React from "react";

function RightColumn() {
  return (
    <aside className="right-column">
      <h3>Learn More</h3>
      <p>Trusted sources for staying safe online:</p>
      <ul>
        <li>
          <a href="https://staysafeonline.org" target="_blank" rel="noreferrer">
            National Cybersecurity Alliance
          </a>
        </li>
        <li>
          <a href="https://www.cisa.gov" target="_blank" rel="noreferrer">
            America's Cyber Defense Agency
          </a>
        </li>
        <li>
          <a href="https://www.cyber.gov.au/" target="_blank" rel="noreferrer">
            Australian Government Cybersecurity
          </a>
        </li>
      </ul>

      <h4>Example</h4>
      <p>
        Imagine receiving an email claiming you've won a prize... Have you
        entered any raffles? Does the email look suspicious? DON'T CLICK!
        Following simple rules like this can make your online information a
        whole lot safer.
      </p>

      <img
        src="/images/cyberlock.jpg"
        alt="Cyberlock image"
        className="right-column-image"
      />
    </aside>
  );
}

export default RightColumn;
