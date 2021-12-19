const fs = require('fs');
const path = require('path');
const { computeConsumption, computeLifeSupportRating } = require('./solution');

describe('day 3', () => {
  const input = fs
    .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
    .trim()
    .split('\n');

  test('part 1', () => {
    expect(computeConsumption(input)).toBe(2954600);
  });

  test('part 2', () => {
    expect(computeLifeSupportRating(input)).toBe(1662846);
  });
});
