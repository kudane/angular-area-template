import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Api1TokenInterceptor } from './api1-token.intercepter';
import { Api1Service } from './api1.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    Api1Service,
    { provide: HTTP_INTERCEPTORS, useClass: Api1TokenInterceptor, multi: true }
  ]
})
export class Api1Module { }
