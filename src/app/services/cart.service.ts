import { Injectable } from '@angular/core';
import { Product, User } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: {[key:number]:number} = JSON.parse(localStorage.getItem('cart') || '{}');
  items: Product[] = JSON.parse(localStorage.getItem('items') || '[]');
  user: User = JSON.parse(localStorage.getItem('user') || JSON.stringify({name: '', address: '', cardNumber: 0, total: 0, success: false}));

  constructor(private httpService: HttpService) { }

  getItems(): void {
    localStorage.setItem('user', JSON.stringify({name: '', address: '', cardNumber: 0, total: 0, success: false}));
    this.httpService.getItems().subscribe(data => {
      localStorage.setItem('items', JSON.stringify(data));
    });
  }

  getCart(): object {
    return this.cart;
  }

  addCartItem(itemId: number, quantity: number): void {
    if(quantity>0){
      if ( Object.hasOwn(this.cart, itemId)){
        this.cart[itemId] += quantity;
      } else {
        this.cart[itemId] = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  getCartItemDetails(itemId: number): Product {
    this.getItems();
    return this.items.filter(item => item.id == itemId)[0];
  }

  updateCartItem(itemId: number, quantity: number): void {
    if(!Object.hasOwn(this.cart, itemId)){
      return;
    }
    if (quantity==0){
      this.removeCartItem(itemId);
    } else {
      this.cart[itemId] = quantity;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  removeCartItem(itemId: number): boolean {
    if(Object.hasOwn(this.cart, itemId)){
      delete this.cart[itemId];
      localStorage.setItem('cart', JSON.stringify(this.cart));
      return true
    }
    return false
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for(let k in this.cart){
      let itemId = parseInt(k);
      totalPrice += this.getCartItemDetails(itemId).price * this.cart[itemId]
    }
    return totalPrice;
  }

  resetCartDetails(): void {
    localStorage.setItem('user', JSON.stringify({name: '', address: '', cardNumber: 0, total: 0, success: false}));
  }

  refreshComponent(): void {
    window.location.reload();
  }
}
