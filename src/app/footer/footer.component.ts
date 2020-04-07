import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor() {}

  onSubmit(f: NgForm) {}
}
