import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalizationModule } from './internationalization/internationalization.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbCarouselModule,
  NgbPopoverModule,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RechercheComponent } from './recherche/recherche.component';
import { PaginationComponent } from './paginator/pagination.component';
import { SafePipe } from './safe.pipe';

const components = [
  HeaderComponent,
  FooterComponent,
  PaginationComponent,
  RechercheComponent,
];

const modules = [
  CommonModule,
  InternationalizationModule,
  FormsModule,
  HttpClientModule,
  RouterModule,
  NgbCarouselModule,
  NgbPopoverModule,
  NgbDatepickerModule,
];

@NgModule({
  declarations: [...components, SafePipe],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
