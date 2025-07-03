import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PersonaComponent } from '../persona/persona.component';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { UsersComponent } from '../users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'users', component: UsersComponent },
];

export default provideRouter(routes);
