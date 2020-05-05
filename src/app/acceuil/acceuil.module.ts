import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AcceuilComponent],
  imports: [CommonModule, AcceuilRoutingModule, SharedModule],
})
export class AcceuilModule {}
