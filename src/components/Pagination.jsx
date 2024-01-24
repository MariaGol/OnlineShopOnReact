import React, { useState } from "react";

export default function Pagination({ page, setPage }) {
  const paginationBtns = [1, 2, 3, 4];
  const paginationClick = (elem) => {
    setPage(elem);
  };

  return (
    <div className="pagination">
      {paginationBtns.map((elem, index) => (
        <button
          className={`paginationBtn ${
            elem === page ? "paginationBtnActive" : "" //в условии для класса сравнить текущую page с тем elem который рендерим (чтобы подсветить стр)
          }`}
          key={index}
          onClick={() => paginationClick(elem)}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}
