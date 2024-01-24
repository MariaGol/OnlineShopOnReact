import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrementItem } from "../redux/slices/basketReducer";
import { Link } from "react-router-dom";

export default function ModalContent({ closeModal, elem }) {
  const { items } = useSelector((state) => state.basket);

  const dispatch = useDispatch();
  const currentItem = items.find((obj) => obj.id === elem.id);
  const handleClick = () => {
    dispatch(addItem(elem));
  };
  function minusPizza() {
    dispatch(decrementItem(currentItem));
  }
  function plusPizza() {
    dispatch(addItem(currentItem));
  }
  return (
    <div className="modal">
      <div>
        <img src={elem.image} alt="" />
      </div>
      <div className="modal__desc">
        <h2>{elem.name}</h2>
        <p>{elem.desc}</p>
        <p>{`${"Рейтинг пиццы среди наших гостей: "} ${
          elem.rate
        } ${"из 10"}`}</p>
        <div className="modal__buttons">
          {!currentItem ? (
            <button onClick={handleClick}>{`${"Добавить в корзину за "} ${
              elem.price
            } ${"₽"}`}</button>
          ) : (
            <>
              <button onClick={minusPizza} disabled={currentItem.count === 1}>
                -
              </button>
              <span>{currentItem.count}</span>
              <button onClick={plusPizza} disabled={currentItem.count === 300}>
                +
              </button>
            </>
          )}

          <button onClick={closeModal}>Закрыть</button>
        </div>
        <div>
          <Link to="/basket">
            <button className="toBasket">Перейти в корзину</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
