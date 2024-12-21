import React from "react";

function Threats() {
  return (
    <section id="threats" className="content-section">
      <h2>Common Cybersecurity Threats</h2>
      <ul>
        <li>
          <strong>Phishing Attacks:</strong> Deceptive emails that trick users
          into revealing personal information or clicking malicious links.
        </li>
        <li>
          <strong>Malware & Viruses:</strong> Malicious software designed to
          damage or steal data from your computer or devices.
        </li>
        <li>
          <strong>Ransomware:</strong> A type of software that hackers can use
          to encrypt or hide your files and demand a ransom for the decryption
          key.
        </li>
      </ul>
    </section>
  );
}

export default Threats;