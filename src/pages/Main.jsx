import React, { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { baseUrl } from "../utils/utils";
import Products from "../components/Products";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Sorting from "../components/Sorting";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const [sorting, setSorting] = useState({
    name: "Сортировать",
    order: "",
    sortBy: "",
  });
  // console.log(searchValue);
  useEffect(() => {
    setLoading(true);
    fetch(
      `${baseUrl}?category=${selected}&sortBy=${sorting.sortBy}&order=${sorting.order}&page=${page}&limit=5`
    )
      .then((response) => response.json())
      .then((products) => {
        setTimeout(() => {
          setLoading(false);
          setProducts(products);
        }, 300);
      });
  }, [selected, sorting, page]);
  return (
    <div>
      <Header />
      <div className="container filters">
        <Filter
          filters={[
            { name: "Все пиццы", value: "" },
            { name: "Вегетарианская", value: "Вегетарианская" },
            { name: "Половинки", value: "Половинки" },
            { name: "Мясная", value: "Мясная" },
            { name: "Хиты", value: "Хиты" },
          ]}
          selected={selected}
          onSelectFilter={(filter) => {
            setSelected(filter);
          }}
        />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <Sorting sorting={sorting} setSorting={setSorting} />
      <PacmanLoader
        color="rgba(253, 110, 0, 1)"
        loading={loading}
        cssOverride={{
          position: "fixed",
          left: "50%",
          top: "70%",
          transform: "translate(-100%, -50%)",
        }}
      />
      <Products
        products={products}
        setProducts={setProducts}
        searchValue={searchValue}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

// !Поиск - компонент Search
// !Выпадающая сортировка (по убыванию цены, по возрастанию цены, по популярности, по алфавиту) - компонент Sorting
// !Снизу добавить разметку с номерами страниц - компонент Pagination

// !отрендерить кнопки из массива чисел (1,2,3,4)
// !на каждую кнопку повешать клик который будет переключать страницу меняем стейт page
// !отобразить визуально текущую страницу ориентируясь на  стейт page

// !добавить крестик справа от search для сброса И глобального поиска И value внутри инпута
// !появляется только при условии если value внутри инпута не пустой
