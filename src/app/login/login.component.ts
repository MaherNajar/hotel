import { AuthService } from "./../auth.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  @ViewChild("f", { static: true })
  form: NgForm;

  showSlider = of(false);

  error;

  get user$() {
    return this.auth.userInfo;
  }

  onSubmit() {
    if (this.form.valid) {
      let username = this.form.controls.email.value;
      let password = this.form.controls.password.value;

      this.auth.login(username, password).subscribe(err => (this.error = err));

      if (!this.error) this.router.navigate(["/"]);
    }
  }

  // getRessource() {
  //   let headers = this.auth.headers;
  //   this.http
  //     .get("http://localhost:57553/api/test", { headers })
  //     .subscribe(res => console.log(res));
  // }

  ngOnInit() {}
}
