import React, { useContext } from "react";
import "./SpecialPicks.css";
import { StoreContext } from "../../context/StoreContext";
import { menu_list } from "../../assets/frontend_assets/assets";

const SpecialPicks = () => {
  const { specialPicks, cartItems, addToCart, url } = useContext(StoreContext);

  const normalizeCategory = (value = "") =>
    value.trim().toLowerCase().replace("deserts", "desserts");

  const getImageSrc = (image) => {
    if (!image) {
      return "";
    }
    if (image.startsWith("http") || image.startsWith("/") || image.includes("assets")) {
      return image;
    }
    return `${url}/images/${image}`;
  };

  const getFallbackImageSrc = (itemCategory) => {
    const normalizedCategory = normalizeCategory(itemCategory);
    const categoryMenu = menu_list.find(
      (menuItem) => normalizeCategory(menuItem.menu_name) === normalizedCategory
    );
    return categoryMenu?.menu_image || menu_list[0]?.menu_image || "";
  };

  const handleImageError = (event, itemCategory) => {
    if (event.currentTarget.dataset.fallbackApplied === "true") {
      return;
    }
    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = getFallbackImageSrc(itemCategory);
  };

  if (!specialPicks.length) {
    return null;
  }

  return (
    <section className="special-picks" id="special-picks">
      <div className="special-picks-heading">
        <h2>Special Picks For You</h2>
        <p>{specialPicks.length} items</p>
      </div>

      <div className="special-picks-list">
        {specialPicks.map((item) => {
          const count = cartItems[item._id] || 0;
          return (
            <article key={item._id} className="food-card">
              <img
                src={getImageSrc(item.image)}
                alt={item.name}
                className="food-card-image"
                onError={(event) => handleImageError(event, item.category)}
              />
              <div className="food-card-content">
                <h3>{item.name}</h3>
                <p className="food-card-price">Rs {item.price}</p>
                <button type="button" onClick={() => addToCart(item._id)}>
                  {count > 0 ? `Added (${count})` : "Add to Cart"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SpecialPicks;
