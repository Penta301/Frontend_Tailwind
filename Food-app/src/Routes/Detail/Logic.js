function Logic() {
  const handleAmount = (quantity) => {
    if (quantity === 0) {
      return 1;
    }
    return quantity;
  };

  return {
    handleAmount,
  };
}

export default Logic;
