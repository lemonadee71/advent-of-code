function countSlidingWindowIncrease(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const firstWindowLimit = i + 3;
    const secondWindowLimit = firstWindowLimit + 1;

    // break if not enough values
    if (firstWindowLimit > arr.length) break;

    const firstWindowValue = arr
      .slice(i, firstWindowLimit)
      .reduce((a, b) => a + b);
    const secondWindowValue = arr
      .slice(i + 1, secondWindowLimit)
      .reduce((a, b) => a + b);

    if (secondWindowValue > firstWindowValue) count++;
  }

  return count;
}

function countDepthIncrease(arr) {
  let count = 0;
  arr.reduce((prev, current) => {
    if (current >= prev) count++;
    return current;
  });

  return count;
}

module.exports = { countDepthIncrease, countSlidingWindowIncrease };
