import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {MoviesListComponent} from './movies-list/movies-list.component'
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
const routes: Routes = [
  {path:"",component:MoviesListComponent},
  {path:"movie/:title/:id",component:MovieDetailsComponent},
  {path:"login",component:LoginFormComponent},
  {path:"register",component:RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
