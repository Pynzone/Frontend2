import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieDetailGuard } from './movie-detail.guard';
import { MovieAddComponent } from './movie-add.component';
import { MovieEditComponent } from './movie-edit.component';
import { MovieEdit2Component } from './movie-edit2.component';

@NgModule({
  declarations: [MovieListComponent,
  MovieDetailComponent,
  MovieAddComponent,
  MovieEditComponent,
  MovieEdit2Component
 ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/:id', component: MovieDetailComponent},
    {path: 'edit/:id', component: MovieEdit2Component}
    ])
  ]
})
export class MovieModule { }
