import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { FavorieComponent } from '../favorie/favorie.component';
@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  @Output() myEvent = new EventEmitter();
  URL = 'https://api.themoviedb.org/3/discover/movie?api_key=';

  movies: any = [];
  res : any = {}
  constructor(private movieService : MovieService, private favo : FavorieComponent) {}

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
    this.favo.pushToFavMovs(this.getTheFilm(id)[0]);
    console.log("------------ Favo --------- ");
    
    console.log(this.favo.favMovs);
    
  }

}
