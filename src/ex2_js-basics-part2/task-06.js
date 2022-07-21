const showPrimes = (number) => {
  let count = 0;
  if (number === 0 || number === 1) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  if (number > 1000) {
    return 'Данные неверны';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
  }
  if (count === 0) {
    return `Число ${number} - простое число`;
  }
  return `Число ${number} - составное число`;
};

module.exports = showPrimes;
