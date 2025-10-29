import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../../../core/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-card',
  imports: [MatCardModule, CommonModule ],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss'
})
export class CurrencyCardComponent {

  constructor(private api: ApiService) {}  

  @Input() valueCurrencyCode: string = '';
  exchangeRate: number | null = null;
  enableCurrency: boolean = false; 
  exchangeValue: number = 0;
  dateString: string = '';
  from = 'BRL';

  ngOnInit() {
    this.api.getCurrentExchangeRate(this.valueCurrencyCode).subscribe({
      next: (data) => {
        console.log('iiii', data)
        this.enableCurrency = true;
        this.exchangeRate = data?.[`${this.from}_${this.valueCurrencyCode}`]?.price ?? null;
        this.dateString = data?.lastUpdatedAt;
        this.exchangeValue = data?.exchangeRate;
      },
      error: (err) => console.error('Erro ao buscar taxa de câmbio:', err),
    });
  }

 

}
