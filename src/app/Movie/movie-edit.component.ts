import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movies: Movie[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService) { }
  ngOnInit() {
    this.getMovies();
  }
  getMovies(): void{
    this.httpService.getMovies().subscribe((movieData) =>
    this.movies = movieData);
}
deleteMovie(movieId: number): void {
  this.httpService.deleteMovie(movieId)
    .subscribe(
      (data: void) => {
        let index: number = this.movies.findIndex(movie => movie.movieId === movieId);
        this.movies.splice(index, 1);
      },
      (err: any) => console.log(err)
    );
}
}
