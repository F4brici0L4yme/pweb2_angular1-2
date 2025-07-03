import { Injectable } from '@angular/core';

export interface ShoppingItem {
  name: string;
  price: number;
  quantity: number;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  items: ShoppingItem[] = [
    { name: 'ZAPATILLAS', price: 250, quantity: 3, checked: false },
    { name: 'PANTALONES', price: 150, quantity: 4, checked: false },
    { name: 'MANZANA', price: 10.5, quantity: 2, checked: true },
    { name: 'PAN', price: 3.5, quantity: 8, checked: true },
    { name: 'CASACA', price: 300, quantity: 2, checked: false },
  ];

  getItems() {
    return this.items;
  }

  addItem(item: ShoppingItem) {
    this.items.push(item);
  }

  removeItem(name: string) {
    this.items = this.items.filter(i => i.name !== name);
  }

  toggleItem(name: string) {
    const item = this.items.find(i => i.name === name);
    if (item) item.checked = !item.checked;
  }

  getTotal() {
    return this.items
      .filter(i => !i.checked)
      .reduce((total, i) => total + i.price * i.quantity, 0);
  }
}
