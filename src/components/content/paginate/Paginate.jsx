import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Paginate.scss";

const Paginate = (props) => {
  const { currentPage, totalPages, paginate } = props;

  const [page, setPage] = useState();
  const [pageTotalNumber, setPageTotalNumber] = useState();

  useEffect(() => {
    setPage(currentPage);
    setPageTotalNumber(totalPages);
  }, [currentPage, totalPages]);

  return (
    <>
      <span className="paginate">
        {page} - {pageTotalNumber}
      </span>
      <button
        className={`${
          currentPage <= 1
            ? "paginate-button paginate-button--disable"
            : "paginate-button"
        }`}
        onClick={() => paginate("previous")}
      >
        Previous
      </button>
      <button
        className={`${
          currentPage >= 20
            ? "paginate-button paginate-button--disable"
            : "paginate-button"
        }`}
        onClick={() => paginate("next")}
      >
        Next
      </button>
    </>
  );
};

Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};

export default Paginate;
