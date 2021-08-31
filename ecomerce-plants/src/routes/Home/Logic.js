import { useState } from "react";

function Logic() {
  const [index, setIndex] = useState(0);

  return {
    index,
    setIndex,
  };
}

export default Logic;
