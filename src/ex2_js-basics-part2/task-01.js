// const showTypeOf = (value) => {
//   if (typeof value === 'number') {
//     return 'number';
//   }
//   if (typeof value === 'string') {
//     return 'string';
//   }
//   if (isNaN(value) === true) {
//     return undefined;
//   }
//   return undefined;
// };

// module.exports = showTypeOf;

const showTypeOf = (value) => {
  switch (typeof (value)) {
    case 'number':
      return 'number';
    case 'string':
      return 'string';
    case isNaN(value):
      return undefined;
    default:
      return undefined;
  }
};

module.exports = showTypeOf;
