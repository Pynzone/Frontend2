import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  pageTitle: string = 'Szczegóły';
  errorMessage = '';
  movie: Movie | undefined;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService) { }

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('id');
    if(param){
      const id = +param;
      this.getMovie(id);
    }
  }
  getMovie(id: number){
    this.httpService.getMovie(id).subscribe(
      movie => this.movie = movie,
      error => this.errorMessage = <any> error);
  }
onBack(): void{
  this.router.navigate(['/movies']);
}
}
