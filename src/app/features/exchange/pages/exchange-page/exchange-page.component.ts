import { Component } from '@angular/core';
import { CurrencySearchComponent } from '../../components/currency-search/currency-search.component';
import { CurrencyCardComponent } from '../../components/currency-card/currency-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exchange-page',
  imports: [
    CurrencySearchComponent,
    CurrencyCardComponent,
    CommonModule
  ],
  templateUrl: './exchange-page.component.html',
  styleUrl: './exchange-page.component.scss'
})
export class ExchangePageComponent {
  currentCurrencyCode: string = '';
  enableCurrency: boolean = false;

  onCurrencyCodeChanged(newCode: string) {
    this.currentCurrencyCode = newCode;
    this.enableCurrency = true;
  }

}


