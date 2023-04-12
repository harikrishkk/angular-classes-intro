import { Component, OnInit } from '@angular/core';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faDumpster = faDumpster;
  currentLoginStatus$!: Observable<boolean>;
  isOpen = false;
  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.currentLoginStatus$ = this.loginService.currentLoginStatus$;
  }

  handleToggle() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.loginService.userLogout();
  }


}
