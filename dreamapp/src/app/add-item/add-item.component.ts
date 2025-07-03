import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingService, ShoppingItem } from '../shopping.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.component.html'
})
export class AddItemComponent {
  name = '';
  price = 0;
  quantity = 1;

  constructor(private shoppingService: ShoppingService) {}

  addItem() {
    const item: ShoppingItem = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      checked: false
    };
    this.shoppingService.addItem(item);
    this.name = '';
    this.price = 0;
    this.quantity = 1;
  }
}
