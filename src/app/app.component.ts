import { Component } from '@angular/core';
import { cardData } from './components/card/card.data';
import { Card } from './model/card.model';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'humber-demo';
  cards: Card[] = cardData;
  faDumpster = faDumpster;

  handleCardSelect(card: any) {
    console.log("Selected", card)
  }
}
