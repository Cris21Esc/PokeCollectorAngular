import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    if (sessionStorage.getItem('user')!=null) {
      this.isLoggedInSubject.next(true);
    }
  }

  login() {
    // Lógica de inicio de sesión...
    // Almacenar el usuario en sessionStorage al iniciar sesión
    sessionStorage.setItem('user', 'usuario');
    console.log(sessionStorage.getItem('user'));
    this.isLoggedInSubject.next(true); // Emitir evento de inicio de sesión
  }

  logout() {
    // Lógica de cierre de sesión...
    // Eliminar el usuario de sessionStorage al cerrar sesión
    sessionStorage.removeItem("user")
    console.log(sessionStorage.getItem('user'));
    this.isLoggedInSubject.next(false); // Emitir evento de cierre de sesión
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}
