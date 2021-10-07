import React from "react";
import css from "./OneDrink.module.css";

export default function OneDrink({ drink, deleteDrink }) {
  return (
    <div>
      <div>Наименование: {drink.name}</div>
      <div>Цена: {drink.price} руб.</div>
      <div>Остаток: {drink.quantity} шт.</div>
      <button className={css.buy_but}
        onClick={() => {
          deleteDrink(drink.id);
        }}
      >
        Купить
      </button>
    </div>
  );
}
