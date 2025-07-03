import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'name-age-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-age.component.html',
  styleUrl: './name-age.component.css'
})
export class NameAgeComponent {
  nombre: string = '';
  edad: number | null = null;
}
