import MusicAlbum from '../ts/domain/MusicAlbum';

test('testing class MusicAlbum', () => {
  const result = new MusicAlbum(1008, 'Meteora', 900, 'Linkin Park');
  const expected = {
    id: 1008,
    name: 'Meteora',
    price: 900,
    author: 'Linkin Park',
  };
  expect(result).toEqual(expected);
});
