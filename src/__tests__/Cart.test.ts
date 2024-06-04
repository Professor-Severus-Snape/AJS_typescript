import Cart from '../ts/service/Cart';
import Book from '../ts/domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('testing .add() method', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225);
  cart.add(book);
  expect(cart.items.length).toBe(1);
});
