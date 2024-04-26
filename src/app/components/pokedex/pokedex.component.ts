import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../services/axios/axios.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon: any[] | null = null;

  constructor(private AxiosService: AxiosService) { }

  ngOnInit(): void {
    const username = 'cris';
    this.obtenerAficiones(username);
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
