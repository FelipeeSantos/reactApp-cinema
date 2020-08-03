import React from "react";

import "./MainContent.scss";
import SlideShow from "../slide-show/SlideShow";

const MainContent = () => {
  const images = [
    {
      url:
        "https://static.vecteezy.com/system/resources/thumbnails/000/157/184/original/retro-movie-cinema-vector-background.jpg"
    },
    { url: "https://i.ytimg.com/vi/44A-KNz2U-w/maxresdefault.jpg" },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGBs3c4LzMnNV6zY3F1opq_2XLzezaEadoJQ&usqp=CAU"
    }
  ];
  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} showArrows={true} />
      <div className="main-content-movie">
        <div className="main-content-movie--title">Now Playing</div>
        <div className="main-content-movie--paginate">Paginate</div>
      </div>
    </div>
  );
};

export default MainContent;
