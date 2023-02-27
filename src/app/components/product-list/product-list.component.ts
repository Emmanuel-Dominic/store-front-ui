import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: Product[] = []

  constructor(private httpService: HttpService, private cartService: CartService) {}

  ngOnInit() {
    this.httpService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
