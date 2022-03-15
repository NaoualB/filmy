import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFilmComponent } from './components/liste-film/liste-film.component';

const routes: Routes = [
  { path: 'listfilms', component: ListeFilmComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
