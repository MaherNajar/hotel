import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  @ViewChild('f', { static: true })
  form: NgForm;
  error;
  showSlider = of(false);

  onSubmit() {
    if (this.form.valid) {
    }
  }

  ngOnInit() {}
}
