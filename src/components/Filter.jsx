import React from "react";
import Search from "./Search";

export default function Filter({ filters, selected, onSelectFilter }) {
  return (
    <ul className="toolbar">
      {filters.map((elem, index) => (
        <li
          key={index}
          className={selected === elem.value ? "toolbar__active" : ""}
          onClick={() => onSelectFilter(elem.value)}
        >
          {elem.name}
        </li>
      ))}
    </ul>
  );
}
