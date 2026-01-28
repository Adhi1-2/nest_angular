import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http: HttpClient) {}
  getproducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getsingleproducts(id: string) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
