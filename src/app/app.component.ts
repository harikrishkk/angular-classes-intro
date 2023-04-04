import { Component } from '@angular/core';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'humber-demo';
  faDumpster = faDumpster;

}
