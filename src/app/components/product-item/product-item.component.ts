import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() item: Product;
  quantity: number = 0;

  constructor(public toastService: ToastService, private cartService: CartService) {
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
    this.toastService.show('Item successfully added to cart!', { classname: 'bg-success text-light', delay: 5000 });
  }

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}
