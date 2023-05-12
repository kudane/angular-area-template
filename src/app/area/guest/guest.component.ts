import { Component } from '@angular/core';

@Component({
  selector: 'guest',
  template: `
    <h1>Guest</h1>
    <router-outlet></router-outlet>
  `,
})
export class GuestComponent { }
