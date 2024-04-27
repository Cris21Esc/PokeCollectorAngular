import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  // Método para realizar una solicitud GET
  getAll(username: string) {
    const url = 'http://192.168.1.29:8080/'; // Especifica la URL completa del endpoint
    return axios.get(url, { params: { username: username } });
  }


  // Agrega otros métodos según sea necesario, como PUT, DELETE, etc.
}
