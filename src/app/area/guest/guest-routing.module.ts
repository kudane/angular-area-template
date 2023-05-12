import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GuestComponent } from './guest.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'guest',
    component: GuestComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
