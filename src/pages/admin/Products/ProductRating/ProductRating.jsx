import React from "react";
import ReactStars from "react-rating-stars-component";

function ProductRating() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      style={{ outline: "none" }}
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
}

export default ProductRating;
