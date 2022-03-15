import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  snapshot: any;
  constructor(private http: HttpClient) {}

  getMovies(){
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=af4430648fc96a64afb77bc0dea546b0'
    );
  }
  // getMoviesID(){
  //   return this.http.get<any>(
  //     `https://api.themoviedb.org/3/discover/movie/${idFromLink}?api_key=af4430648fc96a64afb77bc0dea546b0`
  //   );
  // }
}
