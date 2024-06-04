import Book from '../ts/domain/Book';

test('testing class Book', () => {
  const result = new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225);
  const expected = {
    id: 1001,
    name: 'War and Piece',
    price: 2000,
    author: 'Leo Tolstoy',
    pages: 1225,
  };
  expect(result).toEqual(expected);
});
