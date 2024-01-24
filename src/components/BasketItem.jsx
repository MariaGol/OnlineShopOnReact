import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  decrementItem,
  deleteItem,
} from "../redux/slices/basketReducer";

export default function BasketItem({ elem }) {
  const dispatch = useDispatch();

  function minusPizza() {
    dispatch(decrementItem(elem));
  }
  function plusPizza() {
    dispatch(addItem(elem));
  }

  function deletePizza() {
    dispatch(deleteItem(elem));
  }
  return (
    <div className="basketItem">
      <div className="basketItem__name">
        <img className="basketPizzaImg" src={elem.image} alt="" />
        <span>{elem.name}</span>
        <p>{elem.price} ₽</p>
      </div>
      <div className="basketItem__btn">
        <button onClick={minusPizza} disabled={elem.count === 1}>
          -
        </button>
        <span>{elem.count}</span>
        <button onClick={plusPizza} disabled={elem.count === 300}>
          +
        </button>
        <button onClick={deletePizza} className="deletePizza">
          X
        </button>
      </div>
    </div>
  );
}
