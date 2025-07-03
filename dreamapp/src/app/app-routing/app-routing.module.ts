import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PersonaComponent } from '../persona/persona.component';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { UsersComponent } from '../users/users.component';
import { NameAgeComponent} from '../name-age/name-age.component'
import { PostsComponent } from '../posts/posts.component';
import { VideosComponent } from '../videos/videos.component';

export const routes: Routes = [
  //Angular1
  { path: '', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'users', component: UsersComponent },
  //Angular2
  { path: 'name-age-form', component: NameAgeComponent},
  { path: 'app-posts', component: PostsComponent},
  { path: 'videos', component: VideosComponent },
];

export default provideRouter(routes);
