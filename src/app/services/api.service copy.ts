import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://fakestoreapi.com/products'

  constructor(private _http: HttpClient) { }

  getAll():Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.url)
  }

  getById(productId: string):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.url}/${productId}`)
  }
}
