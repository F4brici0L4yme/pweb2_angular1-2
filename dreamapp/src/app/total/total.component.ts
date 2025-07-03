import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total.component.html'
})
export class TotalComponent implements OnInit {
  total = 0;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.shoppingService.getTotal();
  }
}
