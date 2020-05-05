import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./acceuil/acceuil.module').then((m) => m.AcceuilModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'restauration',
    loadChildren: () =>
      import('./restauration/restauration.module').then(
        (m) => m.RestaurationModule
      ),
  },
  {
    path: 'chambres-suites',
    loadChildren: () =>
      import('./chambres-suites/chambres-suites.module').then(
        (m) => m.ChambresSuitesModule
      ),
  },
  {
    path: 'spa-bien-etre',
    loadChildren: () =>
      import('./spa-bien-etre/spa-bien-etre.module').then(
        (m) => m.SpaBienEtreModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
