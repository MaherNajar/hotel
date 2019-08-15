import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent {
  constructor() {}
  @Input() currentPage: number;
  @Input() totalPages: number[];
  @Output() onChange = new EventEmitter<number>();

  forward() {
    if (this.currentPage === this.totalPages[this.totalPages.length - 1])
      return;
    this.changePage(++this.currentPage);
  }

  backward() {
    if (this.currentPage === this.totalPages[0]) return;
    this.changePage(--this.currentPage);
  }

  changePage(page) {
    this.onChange.emit(page);
  }
}
