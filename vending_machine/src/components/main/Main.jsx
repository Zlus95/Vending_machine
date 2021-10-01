import React, { useState } from "react";
import ListDrink from "../ListDrink/ListDrink";
import OneDrink from "../OneDrink/OneDrink";

export default function Main() {
  // const [customer, Setcustomer] = useState(500);
  // const [machine, Setmachine] = useState(1000);

  // const range = [
  //   { name: "Чай", price: 200 },
  //   { name: "Кофе", price: 55 },
  //   { name: "Вода", price: 67 },
  //   { name: "Кола", price: 100 },
  //   { name: "Сок", price: 80 },
  //   { name: "Энергетик", price: 150 },
  // ];

  // const submitHandler = (ev) => {
  //   ev.preventDefault();
  //   Setcustomer(customer - range[0].price);
  //   Setmachine(machine + range[0].price);
  // };

  return (
    <>
      <ListDrink />
      {/* <OneDrink /> */}
      {/* <div>{customer}</div>
      <div>{machine}</div>
      <ul>{range.length ? range.map((el) => el.name) : "Ошибка сервера"}</ul>
      <button onClick={submitHandler}>Нажми</button> */}
    </>
  );
}
