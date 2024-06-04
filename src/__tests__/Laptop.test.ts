import Laptop from '../ts/domain/Laptop';

test('testing class Laptop', () => {
  const result = new Laptop(100, 'apple macbook pro 16', 410000);
  const expected = {
    id: 100,
    name: 'apple macbook pro 16',
    price: 410000,
  };
  expect(result).toEqual(expected);
});
