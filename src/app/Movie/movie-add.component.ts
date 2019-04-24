import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Movie } from '../Models/movie';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  model: Movie;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService) { }

  ngOnInit() {
  }
  saveMovie(formValues: any): void {
    const newMovie: Movie = <Movie>formValues;
    console.log(newMovie);

    this.httpService.addMovie(newMovie)
    .subscribe(
      (data: Movie) => console.log(data),
      (err: any) => console.log(err)
  );
   }

   onBack(): void{
    this.router.navigate(['/movies']);
  }
}
