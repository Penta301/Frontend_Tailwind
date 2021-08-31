import { useState } from "react";

function Logic() {
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState(1);

  return {
    index,
    setIndex,
    order,
    setOrder,
  };
}

export default Logic;
