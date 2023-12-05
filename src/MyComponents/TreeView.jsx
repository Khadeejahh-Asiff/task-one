import React, { useEffect } from "react";

import "../MyStyling/TreeView.css";

const TreeView = () => {
  useEffect(() => {
    const handleToggle = (event) => {
      const clickedCaret = event.target;
      const nestedElement = clickedCaret.parentElement.querySelector(".nested");

      if (nestedElement) {
        nestedElement.classList.toggle("active");
      }

      clickedCaret.classList.toggle("caret-down");
    };

    const caretElements = document.getElementsByClassName("caret");

    for (let i = 0; i < caretElements.length; i++) {
      caretElements[i].addEventListener("click", handleToggle);
    }

    return () => {
      // Cleanup: remove event listeners when the component unmounts
      for (let i = 0; i < caretElements.length; i++) {
        caretElements[i].removeEventListener("click", handleToggle);
      }
    };
  }, []); // Empty dependency array ensures useEffect runs once after the initial render
  return (
    <div>
      <ul id="myUL">
        <li>
          <span class="caret">Beverages</span>
          <ul class="nested">
            <li>Water</li>
            <li>Coffee</li>
            <li>
              <span class="caret">Tea</span>
              <ul class="nested">
                <li>Black Tea</li>
                <li>White Tea</li>
                <li>
                  <span class="caret">Green Tea</span>
                  <ul class="nested">
                    <li>Sencha</li>
                    <li>Gyokuro</li>
                    <li>Matcha</li>
                    <li>Pi Lo Chun</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TreeView;
