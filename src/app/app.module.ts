import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import {routes} from "./app.routes";

import { AppComponent } from './app.component';
import { LoginComponent} from "./components/login/login.component";
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

import { AxiosService } from './services/axios/axios.service';
import { AuthService } from './services/auth/auth.service';

import {InicioComponent} from "./components/inicio/inicio.component";


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    MenuPrincipalComponent,
    LoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AxiosService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
