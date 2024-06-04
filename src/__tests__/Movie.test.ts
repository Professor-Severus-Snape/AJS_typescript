import Movie from '../ts/domain/Movie';

test('testing class Movie', () => {
  const result = new Movie(
    1111,
    'The Avengers',
    500,
    2012,
    'USA',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17',
  );

  const expected = {
    id: 1111,
    name: 'The Avengers',
    price: 500,
    year: 2012,
    country: 'USA',
    slogan: 'Avengers Assemble!',
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    duration: '137 мин. / 02:17',
  };

  expect(result).toEqual(expected);
});
