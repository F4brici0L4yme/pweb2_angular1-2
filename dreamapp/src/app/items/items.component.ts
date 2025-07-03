import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingService, ShoppingItem } from '../shopping.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
  items: ShoppingItem[] = [];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.items = this.shoppingService.getItems();
  }
}
