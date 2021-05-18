export function calcDots(value) {
  const dotPattern = [
    Array(9).fill(null),
    [null, null, null, null, 'dot', null, null, null, null],
    [null, null, 'dot', null, null, null, 'dot', null, null],
    [null, null, 'dot', null, 'dot', null, 'dot', null, null],
    ['dot', null, 'dot', null, null, null, 'dot', null, 'dot'],
    ['dot', null, 'dot', null, 'dot', null, 'dot', null, 'dot'],
    ['dot', null, 'dot', 'dot', null, 'dot', 'dot', null, 'dot'],
    ['dot', null, 'dot', 'dot', 'dot', 'dot', 'dot', null, 'dot'],
    ['dot', 'dot', 'dot', 'dot', null, 'dot', 'dot', 'dot', 'dot'],
    ['dot', 'dot', 'dot', 'dot', 'dot', 'dot', 'dot', 'dot', 'dot']
  ];
  return dotPattern[value];
}
