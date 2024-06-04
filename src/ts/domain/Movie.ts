import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number, // собственное свойство класса
    readonly country: string, // собственное свойство класса
    readonly slogan: string, // собственное свойство класса
    readonly genre: string[], // собственное свойство класса
    readonly duration: string, // собственное свойство класса
  ) { }
}
