import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Infor, User } from 'src/app/models/product';


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

  constructor(private cartService: CartService) {
    this.items = [];
    this.infor = {
      quantity: 0,
      total: 0
    }
  }
 
  ngOnInit(): void { }

  submitForm(): void {
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
