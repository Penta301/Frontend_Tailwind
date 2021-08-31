function Logic() {
  const handleClick = (amount, length) => {
    if (amount === length) {
      return 0;
    } else if (amount <= 0) {
      return length - 1;
    }
    return amount;
  };

  return {
    handleClick,
  };
}

export default Logic;
