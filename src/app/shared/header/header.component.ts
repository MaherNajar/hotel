import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';

const languages = [
  { flag: 'fr', label: 'Français' },
  { flag: 'gb', label: 'Anglais' },
  { flag: 'es', label: 'Espagnol' },
  { flag: 'it', label: 'Italien' },
  { flag: 'de', label: 'Allemand' },
];

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {
    this.languageList = languages.slice(1);
    this.currentLanguage = languages[0];
  }

  scroll() {
    window.scrollTo({ top: document.body.offsetHeight, behavior: 'smooth' });
  }
  @Input()
  showSlider: Observable<boolean>;

  user$;
  currentLanguage;
  languageList;

  changeLanguage(selectedLanguage) {
    let index = languages.indexOf(selectedLanguage);
    this.languageList = languages.slice();
    this.languageList.splice(index, 1);
    this.currentLanguage = selectedLanguage;
  }

  images = [1, 2, 3].map(
    () => `https://picsum.photos/2000/400?random&t=${Math.random()}`
  );
}
