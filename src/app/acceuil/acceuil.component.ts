import { Component, OnInit, HostListener } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
})
export class AcceuilComponent implements OnInit {
  showSlider = of(true);

  images = [1, 2, 3].map(
    () => `https://picsum.photos/2000/400?random&t=${Math.random()}`
  );

  items = [1, 2, 3];

  ngOnInit() {}
}
