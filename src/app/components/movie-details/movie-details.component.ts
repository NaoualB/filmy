import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies: any = [];
  res : any = {}

  constructor(private movieService : MovieService) {}

  ngOnInit(): void {
    this.moviesOnGetID();
  }

 
  moviesOnGetID(): void{
    this.movieService.getMovies().subscribe(
      (reponse)=>{
        this.res = reponse;
        this.movies = this.res['id'];
        console.log(this.movies);
        
  },
    )
  }

}
