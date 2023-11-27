import React, { useEffect } from "react";
import "../../styles/StarField.css";

const StarField = ({ numStars }) => {
  useEffect(() => {
    const starField = document.querySelector(".star-field");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`; // Adjust star size as needed
      star.style.height = star.style.width;

      starField.appendChild(star);
    }
  }, [numStars]);

  return <div className="star-field"></div>;
};

export default StarField;
