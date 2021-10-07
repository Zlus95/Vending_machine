import React, { useState } from "react";
import { range } from "../../rangeDB";
import OneDrink from "../OneDrink/OneDrink";

export default function ListDrink() {
  const [drinks, setDrink] = useState([...range]);
  const [customer, Setcustomer] = useState(500);
  const [machine, Setmachine] = useState(1000);

  const deleteDrink = (id) => {
    const drinkId = drinks.find((el) => el.id === id);
    if (customer < drinkId.price) {
      alert(`У вас недостаточно средств для покупки ${drinkId.name}`);
      return;
    }
    Setcustomer(customer - drinkId.price);
    Setmachine(machine + drinkId.price);

    setDrink(
      drinks.map((drink) => {
        if (drink.id === id) {
          drink.quantity -= 1;
        }
        if (drink.quantity === 0) {
          alert(`${drink.name} закончился`);
        }
        return drink;
      })
    );
  };

  return (
    <>
      <div>Баланс покупателя: {customer} руб.</div>
      <div>Баланс автомата: {machine} руб.</div>
      <ul>
        {drinks.length
          ? drinks.map((el) => (
              <li>
                <OneDrink drink={el} deleteDrink={deleteDrink} />{" "}
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
