import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavorieComponent } from './components/favorie/favorie.component';
import { HeaderComponent } from './components/header/header.component';
import { ListeFilmComponent } from './components/liste-film/liste-film.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'listfilms', component: ListeFilmComponent },
  { path: 'accueil', component: HeaderComponent },
  { path: 'favorites', component: FavorieComponent },
  { path: 'movieDetail/:id', component: MovieDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
