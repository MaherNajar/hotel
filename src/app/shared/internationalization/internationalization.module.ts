import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n, I18n } from './date-picker';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
  ],
})
export class InternationalizationModule {}
