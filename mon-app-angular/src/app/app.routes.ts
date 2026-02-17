import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';

export const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'products', component: ListProductsComponent},
  {path: 'github', component: GithubUsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'materials', component: MaterialListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'materials/new', component: MaterialFormComponent}
];
