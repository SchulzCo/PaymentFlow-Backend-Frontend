
import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  paymentData = { user_name: '', amount: 0 };

  constructor(private paymentService: PaymentService) {}

  submitPayment() {
    this.paymentService.createPayment(this.paymentData).subscribe(response => {
      console.log('Pago creado:', response);
    });
  }
}