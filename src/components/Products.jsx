import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";
import Pagination from "./Pagination";

export default function Products({ products, setProducts, searchValue }) {
  return (
    <>
      <div className="pizzaContainer">
        {products
          .filter((elem) => {
            return elem.name.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((elem) => (
            <Pizza elem={elem} key={elem.id} />
          ))}
      </div>
    </>
  );
}
