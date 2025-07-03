import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: string[] = ['Juan Mecanico', 'Yhon', 'Pedro Pedro Pedro'];
  newUser: string = '';
  greeting: string = '';

  addUser() {
    if (this.newUser.trim() !== '') {
      this.users.push(this.newUser.trim());
      this.newUser = '';
    }
  }

  greet(user: string) {
    this.greeting = `Hola ${user}`;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
