import sum from './../sum';

describe('Test Sum Function', () => {
  test('adds 1 + 2 to equal 3', () => {
    return expect(sum(1, 2)).toBe(3);
  });

  test('adds 2 + 2 to equal 4', () => {
    return expect(sum(2, 2)).toBe(5);
  });
})
