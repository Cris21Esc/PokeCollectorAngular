import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title: string = "PokeCollectorAngular" ;

  constructor(private router: Router) {
  }

  ngOnInit() {
    // Esperar a que la navegación haya terminado
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Obtener la URL actual después de un pequeño retraso
      setTimeout(() => {
        const currentUrl = this.router.url;
        console.log(currentUrl);

        // Navegar a la URL actual
        this.router.navigateByUrl(currentUrl);
      });
    });
  }
}
