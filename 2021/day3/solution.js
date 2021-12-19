function getMostCommonBit(arr, pos) {
  const noOfOnes = arr.reduce((acc, curr) => {
    if (+curr[pos]) acc++;
    return acc;
  }, 0);

  const noOfZeroes = arr.length - noOfOnes;

  return noOfOnes === noOfZeroes ? -1 : +(noOfOnes > noOfZeroes);
}

// part 1
function computeConsumption(arr) {
  const gamma = [];
  for (let i = 0; i < arr[0].length; i++) {
    gamma.push(getMostCommonBit(arr, i));
  }

  const epsilon = gamma.map((x) => +!x);

  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
}

// part 2
// type = 1 oxygen
// type = 0 co2
function filterBinaryArray(arr, type = 1) {
  let filtered = arr;
  for (let i = 0; i < arr[0].length; i++) {
    const commonBit = getMostCommonBit(filtered, i);
    const bitCriteria = type ? commonBit : +!commonBit;
    filtered = filtered.filter(
      (binary) => +binary[i] === (commonBit < 0 ? type : bitCriteria)
    );

    if (filtered.length === 1) break;
  }

  return parseInt(filtered[0], 2);
}

function computeLifeSupportRating(arr) {
  return filterBinaryArray(arr) * filterBinaryArray(arr, 0);
}

module.exports = { computeConsumption, computeLifeSupportRating };
