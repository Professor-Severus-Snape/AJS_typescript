import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';
import Laptop from './domain/Laptop';

const cart = new Cart(); // {} - пустая корзина
console.log(cart.items); // [] - пустой массив товаров

cart.add(new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225)); // книга (+1)
cart.add(new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225)); // та же книга (+0)
cart.add(new MusicAlbum(1008, 'Meteora', 900, 'Linkin Park')); // альбом (+1)
cart.add(new MusicAlbum(1008, 'Meteora', 900, 'Linkin Park')); // тот же альбом (+0)
cart.add(
  new Movie(
    1111,
    'The Avengers',
    500,
    2012,
    'USA',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17',
  ),
); // фильм (+1)

console.log(cart.items); // массив товаров из 3 объектов
// [
//   { id: 1001, name: "War and Piece", price: 2000, author: "Leo Tolstoy", pages: 1225 },
//   { id: 1008, name: "Meteora", price: 900, author: "Linkin Park" },
//   { id: 1111, name: "The Avengers", price: 500, year: 2012, country: "USA", ...},
// ]

console.log('Общая сумма покупок (без скидок): ', cart.getTotalCost()); // 3_400
console.log('Общая сумма покупок (со скидкой 5%): ', cart.getDiscountTotalCost(5)); // 3_230
console.log('Общая сумма покупок (со скидкой 50%): ', cart.getDiscountTotalCost(50)); // 1_700

cart.remove(1111); // удаление товара по идентификатору (-1)
console.log(cart.items); // массив товаров из двух объектов

cart.remove(666); // попытка удаления не добавленного в корзину товара
console.log(cart.items); // массив товаров из 2 объектов

console.log('Общая сумма покупок (без скидок): ', cart.getTotalCost()); // 2_900
console.log('Общая сумма покупок (со скидкой 10%): ', cart.getDiscountTotalCost(10)); // 2_610
console.log('Общая сумма покупок (со скидкой 50%): ', cart.getDiscountTotalCost(50)); // 1_450

cart.add(new Smartphone(10, 'iPhone 15 Pro Max', 110_000)); // смартфон (+1)
cart.add(new Smartphone(10, 'iPhone 15 Pro Max', 110_000)); // смартфон (+1)

cart.add(new Laptop(100, 'apple macbook pro 16', 410_000)); // ноутбук (+1)
cart.add(new Laptop(100, 'apple macbook pro 16', 410_000)); // ноутбук (+1)
cart.add(new Laptop(100, 'apple macbook pro 16', 410_000)); // ноутбук (+1)

console.log(cart.items); // массив товаров из 7 объектов

cart.remove(100); // удаление товара по идентификатору (-1)
console.log(cart.items); // массив товаров из 6 объектов

cart.remove(100); // удаление товара по идентификатору (-1)
console.log(cart.items); // массив товаров из 5 объектов

cart.remove(10); // удаление товара по идентификатору (-1)
console.log(cart.items); // массив товаров из 4 объектов

cart.remove(10); // удаление товара по идентификатору (-1)
console.log(cart.items); // массив товаров из 3 объектов

cart.remove(10); // все айфоны уже были удалены (-0)
console.log(cart.items); // массив товаров из 3 объектов
