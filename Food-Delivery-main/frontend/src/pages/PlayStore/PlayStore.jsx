import React from "react";
import "../About/About.css";

const PlayStore = () => {
  return (
    <div className="info-page">
      <h1>BaMEE on Google Play</h1>
      <p>
        The BaMEE Android app is coming soon. This page will eventually connect
        to the official Google Play listing for the BaMEE application.
      </p>

      <section className="info-section">
        <h2>What You’ll Get</h2>
        <ul>
          <li>Fast food discovery from your phone</li>
          <li>Order tracking and status notifications</li>
          <li>Personalized offers and reorder shortcuts</li>
          <li>Easy access to support and order history</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Status</h2>
        <p>
          The Google Play release is not live yet. Once available, this page
          will redirect to the official listing.
        </p>
      </section>
    </div>
  );
};

export default PlayStore;
