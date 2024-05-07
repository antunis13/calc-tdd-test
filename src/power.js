function power(a, b) {
  const res = Math.pow(a, b);
  let result = 0;
  if (a < 0 || b < 0) {
    return (result = res.toFixed(6));
  }

  return res;
}

module.exports = power;
