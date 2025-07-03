import { Component } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';

@Component({
  selector: 'app-root',
  imports: [PersonaComponent],
  template: `<app-persona></app-persona>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dreamapp';
}
