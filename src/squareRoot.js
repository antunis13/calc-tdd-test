function sqrtFunc(a) {
  if (a < 0) {
    return "Keep it real";
  }
  const res = Math.sqrt(a);
  const squareRes = res.toFixed(2);

  return squareRes;
}

module.exports = sqrtFunc;
