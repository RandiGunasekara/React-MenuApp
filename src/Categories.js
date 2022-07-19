import React from "react";
import "./Categories.css";

export default function Categories(props) {
  return (
    <div className="buttons">
      <button className="btn1" onClick={props.displayAll}>
        All
      </button>
      <button className="btn1" onClick={props.displayBreakfast}>
        Breakfast
      </button>
      <button className="btn1" onClick={props.displayLunch}>
        Lunch
      </button>
      <button className="btn1" onClick={props.displayDinner}>
        Dinner
      </button>
    </div>
  );
}
