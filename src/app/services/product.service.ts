import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44305/api/products/";
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "getall"
   return this.httpClient.get<ListResponseModel<Product>>(newPath)
    };

    getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
      let newPath = this.apiUrl + "getbycategory?categoryId="+categoryId
      return this.httpClient.get<ListResponseModel<Product>>(newPath)
       };

    add(product:Product):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl + "add", product)
    }
  }

