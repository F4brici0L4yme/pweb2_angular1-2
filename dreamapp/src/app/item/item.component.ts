import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingItem, ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html'
})
export class ItemComponent {
  @Input() item!: ShoppingItem;

  constructor(private shoppingService: ShoppingService) {}

  toggle() {
    this.shoppingService.toggleItem(this.item.name);
  }

  remove() {
    this.shoppingService.removeItem(this.item.name);
  }

  get total() {
    return this.item.price * this.item.quantity;
  }
}
