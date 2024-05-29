import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('mfShopping/ProductModule').then((m) => m.ProductsModule).catch(e => console.log(e)),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('mfPayment/PaymentComponent').then((c) => c.PaymentComponent).catch(e => console.log(e)),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}