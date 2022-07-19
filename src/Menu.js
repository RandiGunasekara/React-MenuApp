import React from "react";
import "./Menu.css";

export default function Menu(props) {
  return (
    <div className="main-box">
      <div className="container-box">
        <div className="image-container">
          <img src={props.item.img} alt="" className="image-menu" />
        </div>
        <div className="details-container">
          <span className="sp1">
            <h2 className="title">{props.item.title}</h2>
          </span>
          <span className="sp1 sp2">Rs.{props.item.price}</span>

          <p className="paragraph">{props.item.desc}</p>
        </div>
      </div>
    </div>
  );
}
