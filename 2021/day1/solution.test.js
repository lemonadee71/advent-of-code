const fs = require('fs');
const path = require('path');
const {
  countDepthIncrease,
  countSlidingWindowIncrease,
} = require('./solution');

describe('day 1', () => {
  const input = fs
    .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
    .trim()
    .split('\n')
    .map((x) => +x);

  test('part 1', () => {
    expect(countDepthIncrease(input)).toBe(1393);
  });

  test('part 2', () => {
    expect(countSlidingWindowIncrease(input)).toBe(1359);
  });
});
