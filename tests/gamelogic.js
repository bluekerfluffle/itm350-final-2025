function setBit(x, y, bitMask, columns) {
  const index = y * columns + x;
  const arrayIndex = Math.floor(index / 32);
  const bitIndex = index % 32;
  bitMask[arrayIndex] |= 1 << bitIndex;
}

function clearBit(x, y, bitMask, columns) {
  const index = y * columns + x;
  const arrayIndex = Math.floor(index / 32);
  const bitIndex = index % 32;
  bitMask[arrayIndex] &= ~(1 << bitIndex);
}

function getBit(x, y, bitMask, columns) {
  const index = y * columns + x;
  const arrayIndex = Math.floor(index / 32);
  const bitIndex = index % 32;
  return (bitMask[arrayIndex] & (1 << bitIndex)) !== 0;
}

function checkCollision(head, snake, bitMask, columns) {
  const { x, y } = head;
  if (getBit(x, y, bitMask, columns)) {
    const tail = snake[snake.length - 1];
    if (x === tail.x && y === tail.y) {
      return false;
    }
    return true;
  }
  return false;
}

function processInput(input, velocityX, velocityY) {
  if (input === "left") {
    if (velocityX === 0 && velocityY === -1) return { velocityX: -1, velocityY: 0 };
    if (velocityX === 0 && velocityY === 1) return { velocityX: 1, velocityY: 0 };
    if (velocityX === 1 && velocityY === 0) return { velocityX: 0, velocityY: -1 };
    if (velocityX === -1 && velocityY === 0) return { velocityX: 0, velocityY: 1 };
  } else if (input === "right") {
    if (velocityX === 0 && velocityY === -1) return { velocityX: 1, velocityY: 0 };
    if (velocityX === 0 && velocityY === 1) return { velocityX: -1, velocityY: 0 };
    if (velocityX === 1 && velocityY === 0) return { velocityX: 0, velocityY: 1 };
    if (velocityX === -1 && velocityY === 0) return { velocityX: 0, velocityY: -1 };
  } else if (input === "forward") {
    if (velocityX === 0 && velocityY === 0) return { velocityX: 0, velocityY: -1 };
  }
  return { velocityX, velocityY };
}

module.exports = {
  setBit,
  clearBit,
  getBit,
  checkCollision,
  processInput,
};
