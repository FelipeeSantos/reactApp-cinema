import React, { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./Rating.scss";

const Rating = ({ rating, totalStars }) => {
  const [numberOfStars, setNumberOfStars] = useState();
  const ratingRef = useRef();

  useEffect(() => {
    setNumberOfStars([...Array(totalStars).keys()].map((index) => index + 1));
    let percentage;

    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }

    ratingRef.current.style.width = `${Math.floor(percentage)}%`;
    console.log(ratingRef.current.style.width);
  }, [rating, totalStars]);

  return (
    <div className="rating">
      <div className="rating__back-stars">
        {numberOfStars &&
          numberOfStars.map((index) => (
            <Fragment key={index}>
              <i className="fa fa-star" aria-hidden="true" />
            </Fragment>
          ))}

        <div className="rating__front-stars" ref={ratingRef}>
          {numberOfStars &&
            numberOfStars.map((index) => (
              <Fragment key={index}>
                <i className="fa fa-star" aria-hidden="true" />
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired
};

export default Rating;
