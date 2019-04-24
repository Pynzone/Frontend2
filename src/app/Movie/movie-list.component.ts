import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Movie } from '../Models/movie';
import { Showing } from '../Models/showing';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie.list.component.css']

})
export class MovieListComponent implements OnInit {
movies: Movie[];
showings: Showing[];
  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.getMovies();
  }
  getMovies(): void{
    this.httpService.getMovies().subscribe((movieData) =>
    this.movies = movieData);
}
}
