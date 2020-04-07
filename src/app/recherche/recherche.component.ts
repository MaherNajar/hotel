import { Component, Input } from '@angular/core';

@Component({
  selector: 'recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
})
export class RechercheComponent {
  @Input()
  showActions = true;

  constructor() {}
}
