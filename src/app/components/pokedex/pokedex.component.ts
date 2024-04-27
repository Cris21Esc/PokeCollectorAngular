import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../services/axios/axios.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon: any[] | null = null;

  constructor(private router: Router,private AxiosService: AxiosService) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('user'));
    const username = 'cris';
    this.obtenerAficiones(username);
    if (sessionStorage.getItem('user')==null) {
      this.router.navigate(["/login"]);
    }
  }

  obtenerAficiones(username: string): void {
    this.AxiosService.getAll(username)
      .then(
        (response: any) => {
          this.pokemon = response.data;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
