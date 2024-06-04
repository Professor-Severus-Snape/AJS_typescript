import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = []; // Buyable[] - массив элементов типа Buyable | this._items = [];

  add(item: Buyable): void {
    if (item.constructor.name !== 'Laptop' && item.constructor.name !== 'Smartphone') {
      if (this._items.some((el) => el.id === item.id)) {
        return;
      }
    }
    this._items.push(item);
  }

  remove(id: number): void {
    const index = this._items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotalCost(): number {
    return Math.floor(this.items.reduce((acc, item) => acc + item.price, 0));
  }

  getDiscountTotalCost(discount: number): number {
    return this.getTotalCost() - Math.floor((this.getTotalCost() * discount) / 100);
  }
}
