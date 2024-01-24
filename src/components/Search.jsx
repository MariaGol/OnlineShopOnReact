import React, { useState } from "react";

export default function Search({ searchValue, setSearchValue }) {
  const [value, setValue] = useState("");
  const handleSearch = () => {
    setSearchValue(value);
  };
  const clearForm = () => {
    setValue(""); //удалили из строки
    setSearchValue(""); //вернули начальную стр
  };
  return (
    <div className="searching">
      <input
        className="searchForm"
        type="text"
        placeholder="Что будем искать?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== "" ? <p onClick={clearForm}>x</p> : ""}
      <button className="searchBtn" type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
