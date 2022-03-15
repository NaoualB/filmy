import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

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
}
