import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './Movie/movie-list.component';
import { MovieDetailComponent } from './Movie/movie-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { MovieDetailGuard } from './Movie/movie-detail.guard';
import { MovieModule } from './Movie/movie.module';
import { MovieAddComponent } from './Movie/movie-add.component';
import { MovieEditComponent } from './Movie/movie-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'createMovie', component: MovieAddComponent},
      {path: 'edit', component: MovieEditComponent},

      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ], {useHash: true}),
    MovieModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
