import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaBienEtreComponent } from './spa-bien-etre.component';

const routes: Routes = [{ path: '', component: SpaBienEtreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaBienEtreRoutingModule { }
