import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { keys } from 'src/app/key';
import { MovieService } from 'src/app/services/movie.service'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  URL = 'https://api.themoviedb.org/3/discover/movie?api_key=';

  movies: any = [];
  res : any = {}
  constructor(private movieService : MovieService) {}

  ngOnInit(): void {
    this.moviesOnGet();
  }

 
  moviesOnGet(): void{
    this.movieService.getMovies().subscribe(
      (reponse)=>{
        console.log(reponse);
        this.res = reponse;
        this.movies = this.res.results;
        
        // this.movies = reponse['results'][1];
        // this.movies = reponse.results;
  },
    )
  }
  /* 
    getMovie(movies: any) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${keys.theMovieDB}`,
    };

    this.http.get<Movie>(`${URL}${keys.theMovieDB}&query=${movies}`, {headers})
    .subscribe(data => {
      console.log(data);
    }, err=>{
      console.log(err);
      
    });
  }*/
}
