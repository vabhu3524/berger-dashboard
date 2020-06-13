import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }
  pieChart:any;
  arrCountries:any=[];
  arrStates:any=[];
  arrCities:any=[];
  arrDataPoints:any=[];
  arrUserData:any=[];
  displayedColumns:any;
  dataSource:any;
  countries:any=["India"];
  states:any=[];
  cities:any=[];
  selectedCountry:any="-";
  selectedState:any="-";
  selectedCity:any="-";
  userCount:any;
  ngOnInit() {
    this.pieChart= {
      chart: {
        type: 'pieChart',
        height: 300,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
    this.getDropDownData();
    this.getUserDataPoints();
    this.selectedCountry=this.countries[0];
    this.onCountryChange(this.selectedCountry);
    this.getUserGridData();
    this.displayedColumns = ['position','sName', 'sMobile', 'sCity','sState','sCountry'];
  }
    getDropDownData(){
      this.dashboardService.getDropDownData().subscribe((res:any)=>{
          if(res!=null && res.success && res.data!=null)
          {
            this.arrCountries=res.data.sCountry;
            this.arrStates=res.data.sState;
            this.arrCities=res.data.sCity;
            this.arrDataPoints=res.data.sDataPointKey;
          }
      });

    }
    getUserDataPoints(){
      this.dashboardService.getUserDataPoints().subscribe((res:any)=>{
        if(res!=null && res.success && res.data!=null)
        {
          this.userCount=res.data.nUser;
          this.arrUserData.push({"key":"Guest User",y:res.data.nGuestPercent});
          this.arrUserData.push({"key":"Registered User",y:res.data.nRegisteredUserPercent});
        }
    });
    }
    getUserGridData(){
      this.dataSource = [];
      this.dashboardService.getUserGridData(this.selectedCity,this.selectedState,this.selectedCountry).subscribe((res:any)=>{
        if(res!=null && res.success && res.data!=null &&  res.data.length>0)
        {
           this.dataSource=res.data;
        }
      });
    }

    onCountryChange(data){
      this.dashboardService.getStates(data).subscribe((res:any)=>{
        if(res!=null && res.success && res.data!=null &&  res.data.length>0)
        {
         this.states=res.data;
        }
      });
    }
  
    onStateChange(data){
      this.dashboardService.getCities(data).subscribe((res:any)=>{
        if(res!=null && res.success && res.data!=null &&  res.data.length>0)
        {
         this.cities=res.data;
        }
      });
    }
  
    onCityChange(data){
  
    }
}
