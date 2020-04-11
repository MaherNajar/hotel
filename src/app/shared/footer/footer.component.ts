import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  url;

  constructor() {
    this.url = `https://www.google.com/maps/embed/v1/view?key=${environment.embedMapApi}&center=43.294700,5.367967&zoom=16
    &maptype=satellite`;
  }
  onSubmit(f: NgForm) {}
}
