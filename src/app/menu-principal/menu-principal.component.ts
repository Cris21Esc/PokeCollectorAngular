// menu.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  template: `
    <nav>
      <div class="row">
        <a class="col enlace-menu text-center p-4 text-bg-dark"
           *ngFor="let enlace of links"
           [routerLink]="['/' + enlace]"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{exact: true}">
          <span>{{ enlace }}</span>
        </a>
      </div>
    </nav>
  `,
  styles: []
})
export class MenuPrincipalComponent {
  @Input() links: string[] = [];
}
