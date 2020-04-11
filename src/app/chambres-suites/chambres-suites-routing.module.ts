import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChambresSuitesComponent } from './chambres-suites.component';

const routes: Routes = [{ path: '', component: ChambresSuitesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambresSuitesRoutingModule { }
