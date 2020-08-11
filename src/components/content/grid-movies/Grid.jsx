import React from "react";

import "./Grid.scss";
import Rating from "../rating/Rating";
import PropTypes from "prop-types";

const Grid = ({ images }) => {
  return (
    <>
      <div className="grid">
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="grid__cell"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="grid__cell-read-more">
                <button className="grid__cell-button">
                  <a href="/">Read More</a>
                </button>
              </div>
              <div className="grid__detail">
                <span className="grid__detail-title">Mission Impossible</span>
                <div className="grid__detail-rating">
                  <Rating rating={image.rating} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid__detail-vote-average">{image.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Grid.propTypes = {
  images: PropTypes.array.isRequired
};

export default Grid;
