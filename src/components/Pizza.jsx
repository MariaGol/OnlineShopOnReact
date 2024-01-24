import React, { useState } from "react";

import Modal from "react-modal";
import ModalContent from "../pages/ModalContent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrementItem } from "../redux/slices/basketReducer";

export default function Pizza({ elem }) {
  const { items } = useSelector((state) => state.basket);
  const currentItem = items.find((obj) => obj.id === elem.id);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const styles = { textDecoration: elem.sale ? "line-through" : "none" };
  const calcPrice = elem.price - (elem.price / 100) * elem.sale;
  const styleBtn = { backgroundColor: "rgba(253, 110, 0, 1)", color: "white" };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container">
      <div className="cards">
        <div className="pizzaCard">
          <img
            onClick={openModal}
            className="pizzaImg"
            src={elem.image}
            alt="pizza"
          />
          <h6 className="pizzaName">{elem.name}</h6>
          <p className="pizzaDesc">{elem.desc}</p>
          <div className="pizzaPriceButton">
            <p>
              от
              <span style={styles}> {elem.price} </span>
              {elem.sale ? (
                <span style={{ color: "red", fontSize: "10px" }}>
                  {Math.round(calcPrice)}
                </span>
              ) : null}{" "}
              ₽
            </p>
            {currentItem ? (
              <button onClick={openModal} style={styleBtn}>
                В корзине
              </button>
            ) : (
              <button onClick={openModal}>Выбрать</button>
            )}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
              <ModalContent closeModal={closeModal} elem={elem} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

//одна карточка пиццы
