import Big from 'big.js';

const operate = (num1, num2, operator) => {
  if (num2 === undefined) return num1;
  if (num1 === undefined) return num2;

  Big.DP = 10;
  const a = Big(num1);
  const b = Big(num2);
  try {
    switch (operator) {
      case '+':
        return a.plus(b).toString();
      case '-':
        return a.minus(b).toString();
      case 'X':
        return a.times(b).toString();
      case '÷':
        return a.div(b).toString();
      default:
        return null;
    }
  } catch (error) {
    return error.message.slice(9);
  }
};

export default operate;
