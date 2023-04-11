import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
  }

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
    this.loginService.currentLoginStatus$.pipe(
      filter(status => !!status),
      tap(() => this.router.navigateByUrl('/'))
    ).subscribe();
  }
  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.loginService.userLogin(email, password);
  }

}
