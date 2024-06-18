import Buyable from '../domain/Buyable';

export default class Cart {
  private itemsList: Buyable[] = []; // массив элементов типа Buyable; аналог this.itemsList = [];

  add(item: Buyable): void {
    if (item.constructor.name !== 'Laptop' && item.constructor.name !== 'Smartphone') {
      if (this.itemsList.some((el) => el.id === item.id)) {
        return;
      }
    }
    this.itemsList.push(item);
  }

  remove(id: number): void {
    const index = this.itemsList.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.itemsList.splice(index, 1);
    }
  }

  get items(): Buyable[] {
    return [...this.itemsList];
  }

  getTotalCost(): number {
    return Math.floor(this.items.reduce((acc, item) => acc + item.price, 0));
  }

  getDiscountTotalCost(discount: number): number {
    return this.getTotalCost() - Math.floor((this.getTotalCost() * discount) / 100);
  }
}
