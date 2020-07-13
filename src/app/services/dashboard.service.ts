import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class DashboardService {

  constructor(private http:HttpClient) { }
  BASE_URL:string=environment.base_url;


  getChartData(key,datapoint,value){

    if(key=="Country")
    {
      return  this.http.get(this.BASE_URL+"/analytics/"+datapoint+"/-/-/"+value);
    }else if(key=="State"){
      return  this.http.get(this.BASE_URL+"/analytics/"+datapoint+"/-/"+value+"/-");
    }else if(key=="City"){
      return  this.http.get(this.BASE_URL+"/analytics/"+datapoint+"/"+value+"/-/-");
    }
 }

  getCityStateCountry(){
    return  this.http.get(this.BASE_URL+"/dropdown");
  }
  getDropDownData(){
    return  this.http.get(this.BASE_URL+"/view/dropdown");
  }
  getUserDataPoints(){
    return  this.http.get(this.BASE_URL+"/view/userDataPoints");
  }
  getUserGridData(city="-",state="-",country="-",pageNo,pageSize){
    return  this.http.get(this.BASE_URL+"/view/userData/"+city+"/"+state+"/"+country+"?page="+pageNo+"&size"+pageSize);
  }


  getFeatureData(data){
    return  this.http.get(this.BASE_URL+"/view/featureUsage/"+data);
  }
  
  getProductDeatils(data){
    return  this.http.get(this.BASE_URL+"/view/products/usage/"+data);
  }

  getProductGridData(key,city='-',state='-',country='-',pageNo,pageSize){
    
    return  this.http.get(this.BASE_URL+"/view/analytics/"+key+"/"+city+"/"+state+"/"+country+"?page="+pageNo+"&size"+pageSize);
  }

  getStates(data){
    return  this.http.get(this.BASE_URL+"/view/dropdown/state/"+data);
  }
  getCities(data){
    return  this.http.get(this.BASE_URL+"/view/dropdown/city/"+data);
  }
}