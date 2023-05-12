import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/guest/home', pathMatch: 'full' },
  { path: "", loadChildren: () => import('./area/guest/guest.module').then(m => m.GuestModule) },
  { path: "", loadChildren: () => import('./area/member/member.module').then(m => m.MemberModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
