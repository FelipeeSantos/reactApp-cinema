import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./SlideShow.scss";

const SlideShow = (props) => {
  const { images, auto, showArrows } = props;
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const { slideShow, slideIndex } = state;
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sliderInterval, setSliderInterval] = useState(0);
  let currentSlideIndex = 0;

  useEffect(() => {
    if (auto) {
      const timeInterval = setInterval(() => {
        autoMoveSlide();
      }, 5000);
      setSliderInterval(timeInterval);
      return () => {
        clearInterval(timeInterval);
        clearInterval(sliderInterval);
      };
    }
    // eslint-disable-next-line
  }, []);

  const autoMoveSlide = () => {
    const lastIndex = currentSlideIndex + 1;
    currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
    setState((previous) => ({
      ...previous,
      slideIndex: currentSlideIndex,
      slideShow: images[currentSlideIndex]
    }));
  };

  const moveSlideWithArrows = (type) => {
    let index = currentIndex;
    if (type === "previous") {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
    } else {
      if (currentIndex < images.length) {
        index += 1;
      }
      if (index === images.length) {
        index = 0;
      }
    }
    setCurrentIndex(index);
    setState((previous) => ({
      ...previous,
      slideIndex: index,
      slideShow: images[index]
    }));
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div
          className="slider-arrow slider-arrow--left"
          onClick={() => moveSlideWithArrows("previous")}
        />
        <div
          className="slider-arrow slider-arrow--right"
          onClick={() => moveSlideWithArrows("next")}
        />
      </div>
    );
  };

  const Indicator = (type) => {
    const { currentSlide } = type;
    const listIndicators = images.map((slide, index) => {
      const buttonClasses =
        index === currentSlide
          ? "slider-nav-button slider-nav-button--active"
          : "slider-nav-button";
      return <button className={buttonClasses} key={index} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <div className="slider">
      <div className="slider-slides">
        {images && images.length && slideShow && (
          <div
            className="slider-image"
            style={{ backgroundImage: `url(${slideShow.url})` }}
          />
        )}
      </div>
      <Indicator currentSlide={slideIndex} />
      {showArrows ? <RenderArrows /> : null}
    </div>
  );
};

SlideShow.propTypes = {
  images: PropTypes.array.isRequired,
  auto: PropTypes.bool.isRequired,
  showArrows: PropTypes.bool.isRequired,
  currentSlide: PropTypes.number
};

export default SlideShow;
