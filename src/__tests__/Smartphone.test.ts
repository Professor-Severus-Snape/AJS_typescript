import Smartphone from '../ts/domain/Smartphone';

test('testing class Smartphone', () => {
  const result = new Smartphone(10, 'iPhone 15 Pro Max', 110000);
  const expected = {
    id: 10,
    name: 'iPhone 15 Pro Max',
    price: 110000,
  };
  expect(result).toEqual(expected);
});
