import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginRequest } from 'src/app/domain/models/login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitLogin() {
    if (this.loginForm.valid) {
      var form: loginRequest = {
        email: this.loginForm.value.Email,
        password: this.loginForm.value.Password,
      };
      this.router.navigateByUrl('/categories')
      if (form.email == 'admin@admin.com' && form.password == 'Admin2023*') {
      this.router.navigateByUrl('/categories')
      }else{
        this.loginForm.markAllAsTouched();
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
