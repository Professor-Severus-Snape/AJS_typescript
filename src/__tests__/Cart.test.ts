import Cart from '../ts/service/Cart';
import Book from '../ts/domain/Book';
import Laptop from '../ts/domain/Laptop';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('testing .add() method - only one product', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225);
  cart.add(book);
  cart.add(book);
  cart.add(book);
  expect(cart.items.length).toBe(1);
});

test('testing .add() method - a lot of products', () => {
  const cart = new Cart();
  const macbook = new Laptop(100, 'apple macbook pro 16', 410_000);
  cart.add(macbook);
  cart.add(macbook);
  cart.add(macbook);
  expect(cart.items.length).toBe(3);
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
  const book = new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225);
  const macbook = new Laptop(100, 'apple macbook pro 16', 410_000);
  cart.add(book);
  cart.add(macbook);
  cart.add(macbook);
  cart.add(macbook);
  expect(cart.getTotalCost()).toBe(1_232_000);
});

test('testing .getDiscountTotalCost() method', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225);
  const macbook = new Laptop(100, 'apple macbook pro 16', 410_000);
  cart.add(book);
  cart.add(macbook);
  cart.add(macbook);
  cart.add(macbook);
  expect(cart.getDiscountTotalCost(10)).toBe(1_108_800);
});
