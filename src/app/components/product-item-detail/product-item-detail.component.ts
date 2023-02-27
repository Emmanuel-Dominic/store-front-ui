import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  quantity: number = 0;
  item: Product = {
    id: 1,
    name: "",
    price: 0,
    url: "",
    description: ""
  };
  
  constructor(private route: ActivatedRoute, private httpService: HttpService, private cartService: CartService) {}

  ngOnInit() {
    let itemId: number = parseInt(this.route.snapshot.params['id']);
    this.httpService.getItemById(itemId).subscribe(itemInfo => {
      itemInfo.map(value => {
        this.item = {
          id: value.id,
          name: value.name,
          url: value.url,
          price: value.price,
          description: value.description
        }
      })
    });
  }
  
  addItemToCart(item: Product): void {
    this.cartService.addCartItem(item.id, this.quantity)
  }
}
