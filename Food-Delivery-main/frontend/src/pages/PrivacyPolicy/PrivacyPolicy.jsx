import React from "react";
import "../About/About.css";

const PrivacyPolicy = () => {
  return (
    <div className="info-page">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This policy explains what information
        BaMEE collects, how we use it, and the choices you have regarding your
        data.
      </p>

      <section className="info-section">
        <h2>Information We Collect</h2>
        <ul>
          <li>Account details such as name, email, and phone number</li>
          <li>Delivery addresses and order history</li>
          <li>Payment-related metadata from secure payment providers</li>
          <li>Basic usage data to improve app performance</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>How We Use Your Data</h2>
        <ul>
          <li>To process and deliver your orders</li>
          <li>To provide customer support and resolve issues</li>
          <li>To personalize offers and improve service quality</li>
          <li>To maintain security and prevent fraud</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Data Protection</h2>
        <p>
          We use reasonable technical and organizational safeguards to protect
          your information from unauthorized access, misuse, or disclosure.
        </p>
      </section>

      <section className="info-section">
        <h2>Your Choices</h2>
        <p>
          You can request updates to your personal information or ask for account
          removal by contacting our support team.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
