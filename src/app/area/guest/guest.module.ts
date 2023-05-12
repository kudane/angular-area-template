import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestRoutingModule } from './guest-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GuestComponent } from './guest.component';
import { CommonModule } from '@angular/common';
import { Api1Module, Api2Module } from '@core';
import { SharedModule } from '@shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GuestRoutingModule,
    SharedModule,
    Api1Module,
    Api2Module
  ],
  declarations: [
    GuestComponent,
    HomeComponent,
    AboutComponent,
  ],
  providers: []
})
export class GuestModule { }
