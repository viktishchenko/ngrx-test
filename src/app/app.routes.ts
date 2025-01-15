import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CoursesComponent } from './auth/courses/courses.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: CoursesComponent, title: 'Courses' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '404', component: NotFoundComponent, title: 'Not found' },
  { path: '**', redirectTo: '404' },
];
