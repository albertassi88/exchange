import { Component } from '@angular/core';
import { CurrencySearchComponent } from '../../components/currency-search/currency-search.component';
import { CurrencyCardComponent } from '../../components/currency-card/currency-card.component';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-exchange-page',
  imports: [CurrencySearchComponent,CurrencyCardComponent],
  templateUrl: './exchange-page.component.html',
  styleUrl: './exchange-page.component.scss'
})
export class ExchangePageComponent {
  currentCurrencyCode: string = '';
  from = 'BRL';
  to = 'JPY';
  exchangeRate: number | null = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getCurrentExchangeRate(this.to).subscribe({
      next: (data) => {
        console.log(data, 'uiuuuiu');
        this.exchangeRate = data?.[`${this.from}_${this.to}`]?.price ?? null;
      },
      error: (err) => console.error('Erro ao buscar taxa de câmbio:', err),
    });
  }


  onCurrencyCodeChanged(newCode: string) {
    this.currentCurrencyCode = newCode;
    console.log('Código da moeda no pai:', this.currentCurrencyCode);
    // aqui você pode chamar serviço, atualizar UI, etc
  }

}


