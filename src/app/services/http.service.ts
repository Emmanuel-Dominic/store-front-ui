import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private items = './../../assets/data.json';

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Product[]> {
    return this.httpClient.get<[]>(this.items);
  }

  getItemById(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.items).pipe(
      map((response) => {
        return response.filter((item) => item.id == id);
      })
    );
  }
}
