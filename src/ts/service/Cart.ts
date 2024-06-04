import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = []; // Buyable[] - массив элементов типа Buyable | this._items = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}
