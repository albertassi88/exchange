import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { ListCurrencyCardComponent } from '../list-currency-card/list-currency-card.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { ExchangeRateResponse } from '../../../../core/models/exchange.model';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [CommonModule, ListCurrencyCardComponent, LoaderComponent],
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit, OnChanges {

  constructor(private api: ApiService) {}

  @Input() valueCurrencyCode: string = '';
  exchangeRate: number | null = null;
  enableCurrency: boolean = false;
  enableList: boolean = false;
  exchangeValue: number = 0;
  dateString: string = '';
  isLoading: boolean = true;
  from: string = 'BRL';

  ngOnInit() {
    if (this.valueCurrencyCode) {
      this.loadExchangeRate();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['valueCurrencyCode'] && !changes['valueCurrencyCode'].firstChange) {
      this.loadExchangeRate();
    }
  }

  loadExchangeRate() {
    this.isLoading = true;
    this.api.getCurrentExchangeRate(this.valueCurrencyCode).subscribe({
      next: (data: ExchangeRateResponse) => {
        this.enableCurrency = true;
        this.exchangeRate = data.exchangeRate;
        this.dateString = data.lastUpdatedAt;
        this.exchangeValue = data.exchangeRate;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Erro ao buscar taxa de câmbio:', err);
      },
    });
  }


  openListCard() {
    this.enableList = !this.enableList;
  }
}

