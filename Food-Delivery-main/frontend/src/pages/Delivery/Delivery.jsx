import React from "react";
import "../About/About.css";

const Delivery = () => {
  return (
    <div className="info-page">
      <h1>Delivery Information</h1>
      <p>
        We aim to deliver your food quickly and safely. Delivery time can vary
        based on restaurant preparation, traffic, weather, and order volume.
      </p>

      <section className="info-section">
        <h2>Estimated Delivery Times</h2>
        <ul>
          <li>Standard orders: 25 to 45 minutes</li>
          <li>Peak hours and weekends: 35 to 60 minutes</li>
          <li>Large or scheduled orders: based on confirmation details</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Delivery Areas</h2>
        <p>
          BaMEE currently serves selected city zones. Availability may differ by
          restaurant and delivery partner coverage.
        </p>
      </section>

      <section className="info-section">
        <h2>Delivery Charges</h2>
        <p>
          Delivery fees are calculated at checkout based on distance, partner
          availability, and promotional offers.
        </p>
      </section>

      <section className="info-section">
        <h2>If Your Order Is Delayed</h2>
        <p>
          You can track order status in real time from your account. If there is
          a significant delay, contact support and we will assist immediately.
        </p>
      </section>
    </div>
  );
};

export default Delivery;
