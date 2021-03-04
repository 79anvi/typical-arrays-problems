
exports.min = function min (array) {
  if (Array.isArray(array) && array.some(e => typeof e === 'number')) {
  return array.reduce((a, c) => a > c ? c: a);
  } return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.some(e => typeof e === 'number')) {
    return array.reduce((a, c) => a > c ? a: c);
    } return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.some(e => typeof e === 'number')) {
      s = array.reduce((a, c) => a + c);
      return s/array.length;
    } return 0;
}
