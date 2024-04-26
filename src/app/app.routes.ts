// app.routes.ts
import { Routes } from '@angular/router';
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { LoginComponent } from "./components/login/login.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { CombateComponent } from "./components/combate/combate.component";

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'combate', component: CombateComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];
