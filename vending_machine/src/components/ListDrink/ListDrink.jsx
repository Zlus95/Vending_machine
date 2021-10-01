import React from "react";
import { range } from "../../rangeDB";
import OneDrink from "../OneDrink/OneDrink";

export default function ListDrink() {
  return (
    <div>
      {range.length
        ? range.map((el) => <OneDrink name={el.name} key={el.id} />)
        : "net"}
    </div>
  );
}
