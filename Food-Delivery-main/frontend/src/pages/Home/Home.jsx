import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CategoryList from "../../components/CategoryList/CategoryList";
import SpecialPicks from "../../components/SpecialPicks/SpecialPicks";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("Salad");

  const handleCategorySelect = (nextCategory) => {
    setCategory(nextCategory);
    const section = document.getElementById("food-display");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Header />
      <CategoryList
        activeCategory={category}
        onSelectCategory={handleCategorySelect}
      />
      <FoodDisplay category={category} />
      <SpecialPicks />
      <AppDownload />
    </div>
  );
};

export default Home;
