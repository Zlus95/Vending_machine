import React, { useState } from "react";
import { range } from "../../rangeDB";
import OneDrink from "../OneDrink/OneDrink";
import css from "./ListDrink.module.css";

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

  const updateSum500 = () => {
    Setcustomer(customer + 500);
  };
  const updateSum100 = () => {
    Setcustomer(customer + 100);
  };
  const updateSum50 = () => {
    Setcustomer(customer + 50);
  };

  return (
    <>
      <>
        <div className={css.balans}>
          <div>
            <h2>Баланс покупателя: {customer} руб.</h2>
          </div>
          <div>
            <h2>Баланс автомата: {machine} руб.</h2>
          </div>
        </div>
        <div className={css.main}>
          <ul className={css.main_info_list}>
            {drinks.length
              ? drinks.map((el) => (
                  <li className={css.main_info_one}>
                    <OneDrink drink={el} deleteDrink={deleteDrink} />{" "}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </>
      <div className={css.but_updater}>
        <button className={css.but_one_updater} onClick={updateSum500}>Внести 500р.</button>
        <button className={css.but_one_updater} onClick={updateSum100}>Внести 100р.</button>
        <button className={css.but_one_updater} onClick={updateSum50}>Внести 50р.</button>
      </div>
    </>
  );
}
