import React, { useState } from "react";

import "./MainContent.scss";
import SlideShow from "../slide-show/SlideShow";
import Paginate from "../paginate/Paginate";
import Grid from "../grid-movies/Grid";

const MainContent = () => {
  const images = [
    {
      url:
        "https://static.vecteezy.com/system/resources/thumbnails/000/157/184/original/retro-movie-cinema-vector-background.jpg",
      rating: 10
    },
    {
      url: "https://i.ytimg.com/vi/44A-KNz2U-w/maxresdefault.jpg",
      rating: 8.5
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGBs3c4LzMnNV6zY3F1opq_2XLzezaEadoJQ&usqp=CAU",
      rating: 7.8
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGBs3c4LzMnNV6zY3F1opq_2XLzezaEadoJQ&usqp=CAU",
      rating: 9.7
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGBs3c4LzMnNV6zY3F1opq_2XLzezaEadoJQ&usqp=CAU",
      rating: 8.8
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGBs3c4LzMnNV6zY3F1opq_2XLzezaEadoJQ&usqp=CAU",
      rating: 6.5
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === "previous" && currentPage > 1) {
      setCurrentPage((previous) => previous - 1);
    } else {
      setCurrentPage((previous) => previous + 1);
    }
  };

  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} showArrows={true} />
      <div className="main-content-movie">
        <div className="main-content-movie--title">Now Playing</div>
        <div className="main-content-movie--paginate">
          <Paginate currentPage={currentPage} totalPages={20} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
