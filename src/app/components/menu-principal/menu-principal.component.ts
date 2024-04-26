// menu-principal.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  isLoggedIn: boolean = false; // Variable para controlar el estado de inicio de sesión
  links: string[] = []; // Arreglo de enlaces

  constructor(private router: Router, private authService: AuthService) {}

  navigate(link: string) {
    this.router.navigate(['/' + link]);
  }
  ngOnInit() {
    this.authService.isAuthenticated().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.updateLinks();
    });
  }

  logout(){
    this.authService.logout();
    this.authService.isAuthenticated().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.updateLinks();
    });
  }

  // Método para actualizar los enlaces dependiendo del estado de inicio de sesión
  updateLinks() {
    if (this.isLoggedIn) {
      this.links = ['inicio', 'listar', 'pokedex']; // Menús cuando el usuario está conectado
    } else {
      this.links = ['inicio', 'login']; // Menús cuando el usuario no está conectado
    }
  }
}
