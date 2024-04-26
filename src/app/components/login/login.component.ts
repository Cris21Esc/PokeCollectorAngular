// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login() {
    /* Implementar validacion formulario */
    this.authService.login();
    console.log(sessionStorage.getItem('user'));
    console.log("loggeo");
  }
}
