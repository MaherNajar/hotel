import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurationRoutingModule } from './restauration-routing.module';
import { RestaurationComponent } from './restauration.component';


@NgModule({
  declarations: [RestaurationComponent],
  imports: [
    CommonModule,
    RestaurationRoutingModule
  ]
})
export class RestaurationModule { }
