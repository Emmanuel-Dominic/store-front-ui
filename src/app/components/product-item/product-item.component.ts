import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item: Product;
  quantity: number = 0;
  
  constructor(private cartService: CartService) {
    this.item = {
      id: 1,
      name: "",
      url: "",
      price: 0.0,
      description: ""
    }
  }

  ngOnInit(): void { }

  addItemToCart(item: Product): void {
    this.cartService.addCartItem(item.id, this.quantity)
  }
}
