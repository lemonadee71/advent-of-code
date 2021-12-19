const fs = require('fs');
const path = require('path');
const { calculateMoves, calculateMovesWithAim } = require('./solution');

describe('day 2', () => {
  const input = fs
    .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
    .trim()
    .split('\n');

  test('part 1', () => {
    expect(calculateMoves(input)).toBe(1728414);
  });

  test('part 2', () => {
    expect(calculateMovesWithAim(input)).toBe(1765720035);
  });
});
