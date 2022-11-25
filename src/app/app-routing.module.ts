import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MoviesListComponent} from './movies-list/movies-list.component'
const routes: Routes = [
  {path:"",component:MoviesListComponent},
  {path:"movie/:title/:id",component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
