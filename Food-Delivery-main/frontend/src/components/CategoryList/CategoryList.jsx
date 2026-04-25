import React, { useRef } from "react";
import "./CategoryList.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const CategoryList = ({ activeCategory, onSelectCategory }) => {
  const categoryScrollRef = useRef(null);

  const slideCategories = (direction) => {
    const scroller = categoryScrollRef.current;
    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: direction * Math.min(scroller.clientWidth * 0.75, 520),
      behavior: "smooth",
    });
  };

  return (
    <section className="category-list" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="category-list-text">
        Choose from a diverse menu and discover dishes crafted with quality
        ingredients. Select a category to instantly view curated options below.
      </p>
      <div className="category-slider">
        <button
          type="button"
          className="category-slide-btn category-slide-btn-left"
          onClick={() => slideCategories(-1)}
          aria-label="Show previous categories"
        >
          &#8249;
        </button>
        <div
          className="category-scroll"
          role="tablist"
          aria-label="Food categories"
          ref={categoryScrollRef}
        >
          {menu_list.map((item) => {
            const isActive = activeCategory === item.menu_name;
            return (
              <button
                key={item.menu_name}
                type="button"
                className={`category-chip ${isActive ? "active" : ""}`}
                onClick={() => onSelectCategory(item.menu_name)}
                role="tab"
                aria-selected={isActive}
              >
                <img src={item.menu_image} alt={item.menu_name} />
                <span>{item.menu_name}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="category-slide-btn category-slide-btn-right"
          onClick={() => slideCategories(1)}
          aria-label="Show more categories"
        >
          &#8250;
        </button>
      </div>
      <hr />
    </section>
  );
};

export default CategoryList;
