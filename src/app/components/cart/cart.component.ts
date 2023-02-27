import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Infor, User } from 'src/app/models/product';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartItems: any[] = [];
  infor: Infor = {
    quantity: 0,
    total: 0
  }
  user: User = JSON.parse(localStorage.getItem('user') || JSON.stringify({name: '', address: '', cardNumber: 0, total: 0, success: false}));

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    let user = this.cartService.user;
    let items = this.cartService.getCart();
    for (const x in items) {
      let item = this.cartService.getCartItemDetails(parseInt(x));
      this.infor.quantity += parseInt((items as any)[x]);
      this.cartItems.push({
        ...item,
        quantity: (items as any)[x]
      });
      this.infor.total += parseInt((items as any)[x]) * item.price;
    }
  }

  updateItemQuatity(event: any, itemId: number): void {
    this.cartService.updateCartItem(itemId, event.target.value);
    this.cartService.refreshComponent();
  }

  removeItem(itemId: number): void {
    this.cartService.removeCartItem(itemId);
    this.cartService.refreshComponent();
  }

  resetCart(): void {
    this.cartService.resetCartDetails();
    this.router.navigateByUrl('');
  }
}
