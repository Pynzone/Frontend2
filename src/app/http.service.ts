import { Injectable } from '@angular/core';
import {Showing} from './app.component';
import {HttpParams, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import {Movie} from './Models/movie';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
  getMovies(): Observable<Movie[]> {
   return this.http.get<Movie[]>('http://localhost:8080/api/movie').pipe(tap(data =>
   console.log('All: ' + JSON.stringify(data))),
   catchError(this.handleError)
   );
  }
  getMovie(idMovie: number): Observable<Movie> {
    return this.getMovies().pipe(map((movies: Movie[]) => movies.find(m => m.movieId === idMovie)));
    }
  addMovie(newMovie: Movie): Observable<Movie> {
     return this.http.post<Movie>('http://localhost:8080/api/movie/create', newMovie, {
       headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    });
  }
  updateMovie(updatedMovie: Movie): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/api/movie/${updatedMovie.movieId}`, updatedMovie, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  deleteMovie(idMovie: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/movie/${idMovie}`);
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  //Showings
     getShowings(): Observable<Showing[]> {
       return this.http.get<Showing[]>('http://localhost:8080/api/showing').pipe(tap(data =>
         console.log('All: ' + JSON.stringify(data))),
         catchError(this.handleError)
    );
   }
     getShwoing(showingId: number): Observable<Showing> {
       return this.getShowings().pipe(map((movies: Showing[]) => movies.find(s => s.showingId === showingId)));
     }
     addShwoing(newShowing: Showing): Observable<Showing> {
      return this.http.post<Showing>('http://localhost:8080/api/showing', newShowing, {
        headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
     });
   }
     updateShowing(updatedShwoing: Showing): Observable<void> {
       return this.http.put<void>(`http://localhost:8080/api/showing/${updatedShwoing.showingId}`, updatedShwoing, {
        headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     });
   }
    deleteShowing(showingId: number): Observable<void> {
     return this.http.delete<void>(`http://localhost:8080/api/movie/${showingId}`);
   }
}
