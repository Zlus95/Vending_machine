import React from "react";

export default function OneDrink({ drink, deleteDrink }) {
  return (
    <div>
      <div>Наименование: {drink.name}</div>
      <div>Цена: {drink.price} руб.</div>
      <div>Остаток: {drink.quantity} шт.</div>
      <button
        onClick={() => {
          deleteDrink(drink.id);
        }}
      >
        Купить
      </button>
    </div>
  );
}
