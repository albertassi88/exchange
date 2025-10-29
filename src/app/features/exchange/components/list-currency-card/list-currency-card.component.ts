import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { ExchangeHistoryResponse } from '../../../../core/models/exchange.model';

@Component({
  selector: 'app-list-currency-card',
  templateUrl: './list-currency-card.component.html',
  styleUrls: ['./list-currency-card.component.scss'],
  imports: [
    CommonModule,
    LoaderComponent
  ]
})

export class ListCurrencyCardComponent implements OnInit {

  constructor(private api: ApiService) {}

  @Input() valueCurrencyCode: string = '';
  currencyData: any[] = [];

  isLoading: boolean = true;

  ngOnInit(): void {
    this.loadDailyExchangeRate();
  }

  loadDailyExchangeRate(): void {
    this.isLoading = true;

    this.api.getDailyExchangeRate(this.valueCurrencyCode).subscribe({
      next: (response: ExchangeHistoryResponse) => {
        this.currencyData = this.calculateCloseDiff(response.data);
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Erro ao buscar taxa de câmbio:', err);
      },
    });
  }

  calculateCloseDiff(data: any[]) {
  return data.map((item, index, arr) => {
    if (index === 0) {
      return { ...item, closeDiff: 0 };
    }

    const currentClose = Number(item.close);
    const prevClose = Number(arr[index - 1]?.close);

    if (!isFinite(prevClose) || prevClose === 0) {
      return { ...item, closeDiff: null };
    }

    const diffPercent = ((currentClose - prevClose) / prevClose) * 100;

    return { ...item, closeDiff: diffPercent };
  });
}




}
