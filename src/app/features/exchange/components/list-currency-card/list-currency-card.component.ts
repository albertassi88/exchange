import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import teste from './teste.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-currency-card',
  templateUrl: './list-currency-card.component.html',
  styleUrls: ['./list-currency-card.component.scss'],
  imports: [CommonModule]
})
export class ListCurrencyCardComponent implements OnInit {

  constructor(private api: ApiService) {}

  from = 'BRL';
  @Input() valueCurrencyCode: string = '';
  dateString: string = '';
  currencyData: any[] = [];

  ngOnInit() {
    this.currencyData = teste.data; // pega só o array "data"
    console.log('tatatata', this.valueCurrencyCode)
    this.api.getDailyExchangeRate(this.valueCurrencyCode).subscribe({
      next: (data) => {
        this.dateString = data?.
        console.log('ahhahahahaha', data)
      },
      error: (err) => console.error('Erro ao buscar taxa de câmbio:', err),
    });
  }

}
