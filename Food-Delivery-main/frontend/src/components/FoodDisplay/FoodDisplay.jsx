import React, { useContext, useMemo } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { menu_list } from "../../assets/frontend_assets/assets";

const FoodDisplay = ({ category }) => {
  const { food_list, cartItems, addToCart, url } = useContext(StoreContext);

  const normalizeCategory = (value = "") =>
    value.trim().toLowerCase().replace("deserts", "desserts");

  const getImageSrc = (image) => {
    if (!image) {
      return "";
    }
    if (
      image.startsWith("http") ||
      image.startsWith("/") ||
      image.startsWith("data:image") ||
      image.includes("assets")
    ) {
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
    // Prevent infinite fallback loops if a fallback image also fails.
    if (event.currentTarget.dataset.fallbackApplied === "true") {
      event.currentTarget.classList.add("image-unavailable");
      event.currentTarget.alt = "";
      return;
    }
    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = getFallbackImageSrc(itemCategory);
  };

  const normalizedCategory = normalizeCategory(category);

  const items = useMemo(() => {
    return food_list.filter((item) => normalizeCategory(item.category) === normalizedCategory);
  }, [food_list, normalizedCategory]);

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-heading">
        <h2>{category} Picks For You</h2>
        <p>{items.length} items</p>
      </div>

      <div key={category} className="food-display-list fade-in-up">
        {items.map((item) => {
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
    </div>
  );
};

export default FoodDisplay;
