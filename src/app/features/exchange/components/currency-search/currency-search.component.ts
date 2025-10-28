import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-currency-search',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
    ],
  templateUrl: './currency-search.component.html',
  styleUrl: './currency-search.component.scss'
})
export class CurrencySearchComponent {

}
