import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingService, ShoppingItem } from '../shopping.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {

  items: ShoppingItem[] = [];
  total = 0;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.items = this.shoppingService.getItems();
    this.calculateTotal();
  }

  toggleItem(name: string) {
    this.shoppingService.toggleItem(name);
    this.loadCart();
  }

  removeItem(name: string) {
    this.shoppingService.removeItem(name);
    this.loadCart();
  }

  calculateTotal() {
    this.total = this.shoppingService.getTotal();
  }
}
