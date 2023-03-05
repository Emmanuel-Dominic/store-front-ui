import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Infor, User } from 'src/app/models/product';
import { NgForm } from '@angular/forms';

import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string = '';
  address: string = '';
  cardNumber: number = 0;
  @Input() items: object[];
  @Input() infor: Infor;
  @Output() user = new EventEmitter<User>();

  constructor(public toastService: ToastService, private cartService: CartService) {
    this.items = [];
    this.infor = {
      quantity: 0,
      total: 0
    }
  }

  ngOnInit(): void { }

  submitForm(checkoutForm: NgForm): void {
    if((19 < String(this.cardNumber).length) || (String(this.cardNumber).length < 16)) {
      checkoutForm.form.controls['cardNumber'].setErrors({'incorrect': true});
    }else {
      this.user.emit({
        name: this.name,
        address: this.address,
        cardNumber: this.cardNumber,
        total: this.infor.total,
        success: true
      });
      localStorage.setItem('user', JSON.stringify({name: this.name, address: this.address, cardNumber: this.cardNumber, total: this.infor.total, success: true}));
      localStorage.removeItem("cart");
      this.cartService.refreshComponent();
    }
  }
}
