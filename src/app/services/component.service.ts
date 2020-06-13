import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class ComponentService {

  constructor(private http:HttpClient) { }
  BASE_URL:string=environment.base_url;

  getProductList(){
    return  this.http.get(this.BASE_URL+"/view/products");
  }
}