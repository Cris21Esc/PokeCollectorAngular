// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  login() {
    // Lógica de inicio de sesión...
    this.isLoggedInSubject.next(true); // Emitir evento de inicio de sesión
  }

  logout() {
    // Lógica de cierre de sesión...
    this.isLoggedInSubject.next(false); // Emitir evento de cierre de sesión
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}
