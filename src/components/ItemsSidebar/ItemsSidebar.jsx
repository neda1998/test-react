import React from "react";
import "../Sidebar/Sidebar.css";

function ItemsSidebar({ img, text }) {
  return (
    <div className="d-flex flex-row hover-sidebar">
      <div className="icons-sidebar">
        <img src={img} alt="img" />
      </div>
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default ItemsSidebar;
