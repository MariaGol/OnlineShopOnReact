import React from "react";

export default function Sorting({ sorting, setSorting }) {
  const listSorting = [
    { id: 1, name: "По возрастанию цены", sortBy: "price", order: "asc" },
    { id: 2, name: "По убыванию цены", sortBy: "price", order: "desc" },
    { id: 3, name: "По популярности", sortBy: "rate", order: "desc" },
    { id: 4, name: "По алфавиту", sortBy: "name", order: "asc" },
  ];
  const sortingClick = (elem) => {
    setSorting(elem);
  };
  return (
    <div className="sorting">
      <div class="dropdown">
        <button class="dropbtn">{sorting.name}</button>
        <div class="dropdown-content">
          {listSorting.map((elem) => (
            <div key={elem.id} onClick={() => sortingClick(elem)}>
              {elem.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
