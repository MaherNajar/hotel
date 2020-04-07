import { Component, OnInit, HostListener } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
})
export class AcceuilComponent implements OnInit {
  smallScreen: boolean;
  showSlider = of(true);

  @HostListener('window:resize', ['$event'])
  onresize(event) {
    this.smallScreen = event.target.innerWidth < 576 ? true : false;
  }
  constructor() {
    this.smallScreen = window.innerWidth < 576 ? true : false;
  }

  images = [1, 2, 3].map(
    () => `https://picsum.photos/2000/400?random&t=${Math.random()}`
  );

  items = [1, 2, 3];

  ngOnInit() {}
}
