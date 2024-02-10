import { MoveSequence, Move } from "./linked-list.js";

function validateCoordinate(coordinate) {
  if (
    Array.isArray(coordinate) &&
    coordinate.length === 2 &&
    Number.isInteger(coordinate.at(0)) &&
    Number.isInteger(coordinate.at(1)) &&
    coordinate.at(0) < 9 &&
    coordinate.at(0) > 0 &&
    coordinate.at(1) < 9 &&
    coordinate.at(1) > 0
  ) {
    return true;
  }
  return false;
}
function* possibleMoves(move) {
  const vectors = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  const newVectors = vectors
    .map((vector) => {
      const mapped = [
        move.coordinate[0] + vector[0],
        move.coordinate[1] + vector[1],
      ];
      if (validateCoordinate(mapped)) {
        return mapped;
      }
    })
    .filter((vector) => vector !== undefined);

  for (const newVector of newVectors) {
    yield new MoveSequence(newVector, move);
  }
}

function knightMoves(start, end) {
  const queue = [new MoveSequence(start)];
  while (JSON.stringify(queue.at(0).coordinate) !== JSON.stringify(end)) {
    const item = queue.shift();
    for (const abc of possibleMoves(item)) {
      queue.push(abc);
    }
  }
  return queue.at(0).toString();
}

console.log(knightMoves([8, 8], [1, 1]));
