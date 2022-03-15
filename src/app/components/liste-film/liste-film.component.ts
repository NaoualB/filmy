import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { FavorieComponent } from '../favorie/favorie.component';
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
    // this.moviesOnGetID();
  }

 
  moviesOnGet(): void{
    this.movieService.getMovies().subscribe(
      (reponse)=>{
        this.res = reponse;
        this.movies = this.res.results;
        console.log(this.movies);
        
        
        // this.movies = reponse['results'][1];
        // this.movies = reponse.results;
  },
    )
  }



getTheFilm(id : any){
  return this.movies.filter(
    (movide : any) => movide.id === id);
}


  //Add by ibrahim, not to be deleted
  addToFav(id : any){
    console.log( this.getTheFilm(id));
    
  }


}
