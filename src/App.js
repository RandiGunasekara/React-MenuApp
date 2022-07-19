import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";
import "./App.css";
import NavBar from "./components/Navbar";

export default function () {
  const [menuItems, setMenuItems] = useState(data);

  const display = menuItems.map((item) => {
    return <Menu key={item.id} item={item} />;
  });

  function displayAll() {
    setMenuItems(data);
  }

  function displayBreakfast() {
    console.log("from beakfast");

    let breakf = data.filter((item) => item.category === "breakfast");
    setMenuItems(breakf);
  }

  function displayLunch() {
    let lunchf = data.filter((item) => item.category === "lunch");
    setMenuItems(lunchf);
  }

  function displayDinner() {
    let dinnerf = data.filter((item) => item.category === "dinner");
    setMenuItems(dinnerf);
  }

  return (
    <div>
      <NavBar />
      <h1 className="heading1">Our Menu</h1>
      <Categories
        displayAll={displayAll}
        displayBreakfast={displayBreakfast}
        displayLunch={displayLunch}
        displayDinner={displayDinner}
      />

      <section className="menulist">{display}</section>
    </div>
  );
}
