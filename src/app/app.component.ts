import { Component } from '@angular/core';
import { ExchangePageComponent } from './features/exchange/pages/exchange-page/exchange-page.component';

@Component({
  selector: 'app-root',
  imports: [ExchangePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exchange';
}
