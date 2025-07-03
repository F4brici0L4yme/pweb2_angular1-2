import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  imports: [CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  nombre: string;
  correo: string;
  hobbies: string[];
  mostrar: boolean;

  constructor() {
    this.nombre = 'Rodrigo Layme';
    this.correo = 'rlaymes@unsa.edu.pe';
    this.hobbies = ['Leer', 'Programar', 'Jugar fútbol', 'Dibujar', 'Probar nuevas comidas'];
    this.mostrar = false;
  }

  showHobbies() {
    this.mostrar = !this.mostrar;
  }

  newHobbie(hobbie: any) {
    if (hobbie.value.trim() !== '') {
      this.hobbies.push(hobbie.value.trim());
      hobbie.value = '';
    }
  }
}
