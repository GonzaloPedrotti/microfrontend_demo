import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonsLibService, ICommonProduct } from '@commons-lib';
@Component({
  standalone: true,
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  imports: [CommonModule],
})
export class PaymentComponent implements OnInit {
  constructor(
    private commonLibService: CommonsLibService
  ) {}

  products: ICommonProduct[] = [];

  ngOnInit(): void {
    this.commonLibService.productList.subscribe({
      next: (res) => {
        this.products = res;
      }
    })
  }
}