import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListeFilmComponent } from '../liste-film/liste-film.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movies: any = [];
  res: any = {};
  id: any;
  theMovie: any;
  theMovies: any = []
  theRealMov: any;

  constructor(private movieService: MovieService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.addTheMoviToVar();
    console.log(this.theMovies);
    
  }


  addTheMoviToVar(){
    this.movieService.getMovies().subscribe(
      (reponse)=>{
        this.res = reponse;
        this.movies = this.res.results;
        
        // this.movies = reponse['results'][1];
        // this.movies = reponse.results;
  },
    )
  }


  getTheFilm(id : any){
    console.log("The id is : " + id);
    
    return this.movies.filter(
      (movie : any) => movie.id === id);

  }

  printer(id : any){
    console.log("The id is ----- : " + id);
    console.log(this.movies);
    
    this.movies.array.forEach((movie : any) => {
      (movie : any) => console.log(movie)

    });

  }

    //Add by ibrahim, not to be deleted
    addToFav(){
      console.log( this.getTheFilm(this.theMovie));

  
    }
  getTheId(){

    this.route.paramMap.subscribe(params => {
      let  id = params.get('id');
      this.theMovie = id;
            
      });

  }

  

  
  // moviesOnGetID(): void {
  //   this.movieService.getMovies().subscribe(params =>{
  //     return this.movies.filter(
  //       (movie : any) => this.movies.id === id;
  //     // this.id = parseInt(params['id']);
  //     console.log(this.id);
      
  // });

//   }
// }
// getTheFilm(id : any){
//   return this.movies.filter(
//     (movie : any) => movie.id === id);
// }
}
