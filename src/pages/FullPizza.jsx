import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../utils/utils";
import { PacmanLoader } from "react-spinners";
import Header from "../components/Header";

export default function FullPizza() {
  const { id } = useParams();
  console.log(id);
  const [pizza, setPizza] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/${id}`)
      .then((response) => response.json())
      .then((product) => {
        setTimeout(() => {
          setLoading(false);
          setPizza(product);
        }, 300);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="modal container">
        <div>
          <img src={pizza.image} alt="" />
        </div>
        <div className="modal__desc">
          <h3>{pizza.name}</h3>
          <p>{pizza.desc}</p>
          <p>{`${"Рейтинг пиццы среди наших гостей: "} ${
            pizza.rate
          } ${"из 10"}`}</p>
          <div className="modal__buttons">
            <button>{`${"Добавить в корзину за "} ${
              pizza.price
            } ${"₽"}`}</button>
            <Link to="/basket">
              <button>Перейти в корзину</button>
            </Link>
          </div>
        </div>
      </div>
      <PacmanLoader
        color="rgba(253, 110, 0, 1)"
        loading={loading}
        cssOverride={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-100%, -50%)",
        }}
      />
    </div>
  );
}
