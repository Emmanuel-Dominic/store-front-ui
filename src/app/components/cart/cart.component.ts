import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Infor, User } from 'src/app/models/product';
import {Router} from '@angular/router';

import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  @Input() cartItems: any[] = [];
  infor: Infor = {
    quantity: 0,
    total: 0
  }
  user: User = JSON.parse(localStorage.getItem('user') || JSON.stringify({name: '', address: '', cardNumber: 0, total: 0, success: false}));

  constructor(public toastService: ToastService, private router: Router, private cartService: CartService) {}

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
    setTimeout(() => {
      if (event != null) {
        this.cartService.updateCartItem(itemId, event);
        this.toastService.show('Item successfully updated!', { classname: 'bg-success text-light', delay: 5000 });
        setTimeout(()=>{
          this.cartService.refreshComponent();
        }, 1000)
      }
    }, 3000)
  }

  removeItem(itemId: number): void {
    this.cartService.removeCartItem(itemId);
    this.toastService.show('Item successfully removed!', { classname: 'bg-success text-light', delay: 5000 });
    setTimeout(()=>{
      this.cartService.refreshComponent();
    }, 1000)
  }

  resetCart(): void {
    this.cartService.resetCartDetails();
    this.toastService.show('Thank you for shopping with us!', { classname: 'bg-success text-light', delay: 5000 });
    setTimeout(()=>{
      this.router.navigateByUrl('');
    }, 1000)
  }

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}
