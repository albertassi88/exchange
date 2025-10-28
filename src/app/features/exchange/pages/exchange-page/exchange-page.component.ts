import { Component } from '@angular/core';
import { CurrencySearchComponent } from '../../components/currency-search/currency-search.component';
import { CurrencyCardComponent } from '../../components/currency-card/currency-card.component';

@Component({
  selector: 'app-exchange-page',
  imports: [CurrencySearchComponent,CurrencyCardComponent],
  templateUrl: './exchange-page.component.html',
  styleUrl: './exchange-page.component.scss'
})
export class ExchangePageComponent {


}


