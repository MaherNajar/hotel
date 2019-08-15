import { Component, Output, EventEmitter, Input } from "@angular/core";
import { BsLocaleService, BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { delay } from "rxjs/operators";

@Component({
  selector: "recherche",
  templateUrl: "./recherche.component.html",
  styleUrls: ["./recherche.component.css"]
})
export class RechercheComponent {
  @Input()
  showActions = true;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  @Output()
  rangeDateValue = new EventEmitter<Date[]>();

  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(localeService: BsLocaleService) {
    localeService.use("fr");

    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.newRangeDate();
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-default",
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31)
      }
    );
  }

  async newRangeDate() {
    await delay(0);
    this.rangeDateValue.emit(this.bsRangeValue);
  }
}
