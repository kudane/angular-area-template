import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Api2TokenInterceptor } from './api2-token.intercepter';
import { Api2Service } from './api2.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    Api2Service,
    { provide: HTTP_INTERCEPTORS, useClass: Api2TokenInterceptor, multi: true }
  ]
})
export class Api2Module { }
