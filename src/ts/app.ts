import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart(); // {} - пустая корзина
console.log(cart.items); // [] - пустой массив товаров

cart.add(new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225)); // книга
cart.add(new MusicAlbum(1008, 'Meteora', 900, 'Linkin Park')); // альбом
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
); // фильм

console.log(cart.items); // массив товаров из трёх объектов
// [
//   { id: 1001, name: "War and Piece", price: 2000, author: "Leo Tolstoy", pages: 1225 },
//   { id: 1008, name: "Meteora", price: 900, author: "Linkin Park" },
//   { id: 1111, name: "The Avengers", price: 500, year: 2012, country: "USA", ...},
// ]

console.log('Общая сумма покупок (без скидок): ', cart.getTotalCost()); // 3_400
console.log('Общая сумма покупок (со скидкой 5%): ', cart.getDiscountTotalCost(5)); // 3_230
console.log('Общая сумма покупок (со скидкой 50%): ', cart.getDiscountTotalCost(50)); // 1_700

cart.remove(1111); // удаление товара по идентификатору
console.log(cart.items); // массив товаров из двух объектов

cart.remove(666); // попытка удаления не добавленного в корзину товара
console.log(cart.items); // массив товаров из двух объектов

console.log('Общая сумма покупок (без скидок): ', cart.getTotalCost()); // 2_900
console.log('Общая сумма покупок (со скидкой 10%): ', cart.getDiscountTotalCost(10)); // 2_610
console.log('Общая сумма покупок (со скидкой 50%): ', cart.getDiscountTotalCost(50)); // 1_450
