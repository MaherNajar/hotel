import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showSlider: Observable<boolean>;

  onActivate(component) {
    if (component.showSlider) this.showSlider = component.showSlider;
  }
}
