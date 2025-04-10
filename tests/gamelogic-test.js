const { setBit, clearBit, getBit, checkCollision, processInput } = require('./gameLogic'); 

const columns = 20;
const rows = 20;
const totalCells = rows * columns;
let bitMask = new Uint32Array(Math.ceil(totalCells / 32));

beforeEach(() => {
  bitMask.fill(0); // clear board before each test
});

describe('Bitmask Functions', () => {
  test('setBit and getBit should work correctly', () => {
    setBit(3, 2, bitMask, columns);
    expect(getBit(3, 2, bitMask, columns)).toBe(true);
  });

  test('clearBit should remove bit', () => {
    setBit(5, 5, bitMask, columns);
    clearBit(5, 5, bitMask, columns);
    expect(getBit(5, 5, bitMask, columns)).toBe(false);
  });

  test('getBit should return false if never set', () => {
    expect(getBit(10, 10, bitMask, columns)).toBe(false);
  });
});

describe('checkCollision()', () => {
  test('should return true if head collides with occupied cell', () => {
    setBit(2, 2, bitMask, columns);
    const head = { x: 2, y: 2 };
    const snake = [{ x: 2, y: 2 }, { x: 1, y: 2 }];
    expect(checkCollision(head, snake, bitMask, columns)).toBe(true);
  });

  test('should return false if head moves into second segment', () => {
    const head = { x: 1, y: 2 };
    const snake = [{ x: 2, y: 2 }, { x: 1, y: 2 }];
    setBit(1, 2, bitMask, columns);
    expect(checkCollision(head, snake, bitMask, columns)).toBe(false);
  });
});

describe('processInput()', () => {
  test('should update velocity for left turn', () => {
    let velocityX = 0, velocityY = -1;
    const result = processInput('left', velocityX, velocityY);
    expect(result).toEqual({ velocityX: -1, velocityY: 0 });
  });

  test('should update velocity for right turn', () => {
    let velocityX = 0, velocityY = -1;
    const result = processInput('right', velocityX, velocityY);
    expect(result).toEqual({ velocityX: 1, velocityY: 0 });
  });

  test('should start forward movement if stationary', () => {
    let velocityX = 0, velocityY = 0;
    const result = processInput('forward', velocityX, velocityY);
    expect(result).toEqual({ velocityX: 0, velocityY: -1 });
  });
});
