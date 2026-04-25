import React from "react";
import "../About/About.css";

const AppStore = () => {
  return (
    <div className="info-page">
      <h1>BaMEE on the App Store</h1>
      <p>
        The BaMEE iOS app is coming soon. This page will eventually connect to
        the official App Store listing for the BaMEE application.
      </p>

      <section className="info-section">
        <h2>What You’ll Be Able to Do</h2>
        <ul>
          <li>Browse restaurants and menus on the go</li>
          <li>Track orders in real time</li>
          <li>Save favorite meals for quick reordering</li>
          <li>Receive delivery and promotion updates</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Status</h2>
        <p>
          The App Store release is not live yet. Once available, this page will
          redirect to the official listing.
        </p>
      </section>
    </div>
  );
};

export default AppStore;
