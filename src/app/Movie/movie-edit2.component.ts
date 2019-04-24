import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Movie } from '../Models/movie';

@Component({
  selector: 'app-movie-edit2',
  templateUrl: './movie-edit2.component.html',
  styleUrls: ['./movie-edit2.component.css']
})
export class MovieEdit2Component implements OnInit {
  selectedMovie: Movie;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService) { }

  ngOnInit() {
    let movieId: number = parseInt(this.route.snapshot.params['id']);
    this.httpService.getMovie(movieId)
      .subscribe(
        (data: Movie) => this.selectedMovie = data,
        (err: any) => console.log(err)
      );
  }
  saveChanges(): void {
    this.httpService.updateMovie(this.selectedMovie)
      .subscribe(
        (data: void) => console.log(`${this.selectedMovie.movieId} updated successfully.`),
        (err: any) => console.log(err)
      );
  }
  onBack(): void{
    this.router.navigate(['/movies']);
  }
}
