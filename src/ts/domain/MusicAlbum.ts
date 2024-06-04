import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly author: string, // собственное свойство класса
  ) { }
}
