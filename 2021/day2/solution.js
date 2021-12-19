const values = {
  down: 1,
  up: -1,
};

function calculateMovesWithAim(arr) {
  const moves = arr.map((move) => move.split(' '));
  let distance = 0;
  let depth = 0;
  let aim = 0;

  moves.forEach(([type, x]) => {
    if (type === 'forward') {
      distance += +x;
      depth += aim * +x;
    } else {
      aim += values[type] * +x;
    }
  });

  return distance * depth;
}

function calculateMoves(arr) {
  const moves = arr.map((move) => move.split(' '));
  let distance = 0;
  let depth = 0;

  moves.forEach(([type, x]) => {
    if (type === 'forward') distance += +x;
    else depth += values[type] * +x;
  });

  return distance * depth;
}

module.exports = { calculateMoves, calculateMovesWithAim };
