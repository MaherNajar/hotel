import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambresSuitesRoutingModule } from './chambres-suites-routing.module';
import { ChambresSuitesComponent } from './chambres-suites.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChambresSuitesComponent],
  imports: [CommonModule, ChambresSuitesRoutingModule, SharedModule],
})
export class ChambresSuitesModule {}
