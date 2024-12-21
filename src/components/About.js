import React from "react";

function About() {
  return (
    <section id="about" className="content-section">
      <h2>About Cybersecurity</h2>
      <p>
        Cybersecurity involves protecting systems, networks, and programs from
        digital attacks. It also helps protect your online passwords, accounts,
        and devices. Stay safe by following tips on this site. If you have any
        questions, please contact us below.
      </p>

      <section id="helpful-tips" className="content-section">
        <h2>Safety Tips</h2>
        <ul>
          <li>
            Use strong, unique passwords for each of your online accounts.
          </li>
          <li>Enable two-factor authentication whenever possible.</li>
          <li>
            Be aware of <a href="#threats">phishing attacks!</a> Never click
            suspicious links or attachments in emails.
          </li>
          <li>Keep your operating system and apps updated regularly.</li>
        </ul>
      </section>
    </section>
  );
}

export default About;
