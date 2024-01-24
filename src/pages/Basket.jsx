import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import Header from "../components/Header";
import { clearCart } from "../redux/slices/basketReducer";
import { Link } from "react-router-dom";

export default function Basket() {
  const { items, totalPrice, totalCount, totalPriceSale } = useSelector(
    (state) => state.basket
  );
  const isSale = totalPriceSale < totalPrice;
  const styles = { textDecoration: isSale ? "line-through" : "none" };
  console.log(totalPriceSale);
  const dispatch = useDispatch();
  function deleteBasket() {
    dispatch(clearCart());
  }
  const stylesBtn = {
    backgroundColor: totalCount > 0 ? "rgba(253, 110, 0, 1)" : "grey",
  };
  return (
    <>
      <Header />
      <div className="basketFull">
        <div className="basketLeft">
          <div className="basketLeft__actions">
            <h2>Корзина</h2>
            <button onClick={deleteBasket} style={stylesBtn}>
              Очистить корзину
            </button>
          </div>
          {items.map((elem) => (
            <BasketItem elem={elem} key={elem.id} />
          ))}
        </div>
        <div className="basketRight">
          <p>Всего пицц в корзине: {totalCount}</p>
          <p>
            Стоимость заказа:
            <span style={styles}> {totalPrice} ₽</span>
            {isSale && (
              <span style={{ color: "red" }}>
                {" "}
                Стоимость заказа с учетом скидки: {totalPriceSale} ₽
              </span>
            )}
          </p>
          {totalCount > 0 ? (
            <div>
              <button className="makeOrder">Оформить заказ</button>
            </div>
          ) : (
            <div></div>
          )}
          <Link to="/">
            <button>Продолжить выбор</button>
          </Link>
        </div>
      </div>
    </>
  );
}
