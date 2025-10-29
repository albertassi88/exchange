import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ExchangeHistoryResponse, ExchangeRateResponse } from '../models/exchange.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly BASE_URL = environment.apiUrl;
  private readonly API_KEY = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCurrentExchangeRate(to: string): Observable<ExchangeRateResponse> {
    const from = 'BRL';
    const url = `${this.BASE_URL}/currentExchangeRate?apiKey=${this.API_KEY}&from_symbol=${from}&to_symbol=${to}`;
    return this.http.get<ExchangeRateResponse>(url);
  }

  getDailyExchangeRate(to: string): Observable<ExchangeHistoryResponse> {
    const from = 'BRL';
    const url = `${this.BASE_URL}/dailyExchangeRate?apiKey=${this.API_KEY}&from_symbol=${from}&to_symbol=${to}`;
    return this.http.get<ExchangeHistoryResponse>(url);
  }
}
