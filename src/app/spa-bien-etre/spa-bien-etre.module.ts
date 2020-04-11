import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaBienEtreRoutingModule } from './spa-bien-etre-routing.module';
import { SpaBienEtreComponent } from './spa-bien-etre.component';

@NgModule({
  declarations: [SpaBienEtreComponent],
  imports: [CommonModule, SpaBienEtreRoutingModule],
})
export class SpaBienEtreModule {}
