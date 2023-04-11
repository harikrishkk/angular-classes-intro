import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  get userEmail() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get isEmailValid() {
    return !this.loginForm.get('email')?.valid && this.loginForm.get('email')?.touched;
  }

  get isPasswordValid() {
    return !this.loginForm.get('password')?.valid && this.loginForm.get('password')?.touched;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  onSubmit() {
    console.log(this.loginForm)
  }

}
