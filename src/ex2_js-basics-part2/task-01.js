const showTypeOf = (value) => {
  if (typeof value === 'number') {
    return 'number';
  }
  if (typeof value === 'string') {
    return 'string';
  }
  if (isNaN(value) === true) {
    return undefined;
  }
  return undefined;
};

module.exports = showTypeOf;
