export interface ExchangeRateResponse {
  success: boolean;
  lastUpdatedAt: string;
  fromSymbol: string;
  toSymbol: string;
  exchangeRate: number;
}

export interface ExchangeHistoryItem {
  open: number;
  high: number;
  low: number;
  close: number;
  date: string;
}

export interface ExchangeHistoryResponse {
  success: boolean;
  from: string;
  to: string;
  lastUpdatedAt: string;
  data: ExchangeHistoryItem[];
}
