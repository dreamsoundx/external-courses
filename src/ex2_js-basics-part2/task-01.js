const showTypeOf = (value) => {
  if (typeof value === 'number') {
    return 'number';
  }
  if (typeof value === 'string') {
    return 'string';
  }
  return undefined;
};

module.exports = showTypeOf;
