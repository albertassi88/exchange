import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-currency-search',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
    ],
  templateUrl: './currency-search.component.html',
  styleUrl: './currency-search.component.scss'
})
export class CurrencySearchComponent {

  @Output() currencyCodeChange = new EventEmitter<string>();

  currencyCode: string = '';

  onInputChange(value: string) {
    this.currencyCode = value;
    this.currencyCodeChange.emit(this.currencyCode);  
    this.currencyCode = '';
  }


}
