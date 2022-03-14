import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListeFilmComponent } from './components/liste-film/liste-film.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavorieComponent } from './components/favorie/favorie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ListeFilmComponent,
    PopUpComponent,
    FooterComponent,
    FavorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
