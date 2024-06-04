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

test('testing .remove() method', () => {
  const cart = new Cart();
  const book1 = new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225);
  const book2 = new Book(1002, '1984', 350, 'George Orwell', 196);
  cart.add(book1);
  cart.add(book2);
  cart.remove(1002);
  expect(cart.items.length).toBe(1);
});

test('testing .getTotalCost() method', () => {
  const cart = new Cart();
  const book1 = new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225);
  const book2 = new Book(1002, '1984', 350, 'George Orwell', 196);
  cart.add(book1);
  cart.add(book2);
  expect(cart.getTotalCost()).toBe(2350);
});

test('testing .getDiscountTotalCost() method', () => {
  const cart = new Cart();
  const book1 = new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225);
  const book2 = new Book(1002, '1984', 350, 'George Orwell', 196);
  cart.add(book1);
  cart.add(book2);
  expect(cart.getDiscountTotalCost(10)).toBe(2115);
});
