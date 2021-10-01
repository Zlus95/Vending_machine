import React from "react";
import { range } from "../../rangeDB";

export default function OneDrink() {
  console.log(range.name);
  return (
    <div>
      <div>{range[0].name}</div>
    </div>
  );
}
