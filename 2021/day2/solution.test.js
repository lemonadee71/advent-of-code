const fs = require('fs');
const { calculateMoves, calculateMovesWithAim } = require('./solution');

describe('day 2', () => {
  const input = fs
    .readFileSync(
      '/home/lemon/Desktop/the-odin-project/advent-of-code/2021/day2/input.txt',
      'utf8'
    )
    .trim()
    .split('\n');

  test('part 1', () => {
    expect(calculateMoves(input)).toBe(1728414);
  });

  test('part 2', () => {
    expect(calculateMovesWithAim(input)).toBe(1765720035);
  });
});
