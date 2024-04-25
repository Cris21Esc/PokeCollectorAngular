import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  // Método para realizar una solicitud GET
  getAll(username: string) {
    const url = 'http://localhost:8085/'; // Especifica la URL completa del endpoint
    return axios.get(url, { params: { username: username } });
  }

  // Método para realizar una solicitud POST
  post(url: string, data: any) {
    return axios.post(url, data);
  }

  // Agrega otros métodos según sea necesario, como PUT, DELETE, etc.
}
