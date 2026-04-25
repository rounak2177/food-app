import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="info-page">
      <h1>About BaMEE</h1>
      <p>
        BaMEE is a food delivery platform built to make ordering meals fast,
        reliable, and enjoyable. We connect customers with trusted local
        restaurants and provide a smooth experience from browsing to doorstep
        delivery.
      </p>

      <section className="info-section">
        <h2>Our Mission</h2>
        <p>
          To help people enjoy quality food with convenience while supporting
          local food businesses through technology and dependable logistics.
        </p>
      </section>

      <section className="info-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Easy menu exploration across categories</li>
          <li>Simple cart and secure checkout flow</li>
          <li>Live order status and order history</li>
          <li>Customer support for quick issue resolution</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Why Customers Choose Us</h2>
        <p>
          BaMEE focuses on speed, freshness, and consistency. We continuously
          improve the platform so every order feels effortless and trustworthy.
        </p>
      </section>
    </div>
  );
};

export default About;
