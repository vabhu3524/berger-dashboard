import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';
import { MatTableDataSource } from '@angular/material';

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
  dataSource: MatTableDataSource<any>;
  countries:any=["India"];
  states:any=[];
  cities:any=[];
  selectedCountry:any="-";
  selectedState:any="-";
  selectedCity:any="-";
  userCount:any;
  recordLength:any=0;
  pagesTotal:any=0;
  recordPageSize:any=20;
  pageNo:any=0;
  tableHeight:any=400;
  recordNumber:any=0;
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
    this.tableHeight=screen.height-350;
    this.dataSource=new MatTableDataSource();
    this.getDropDownData();
    this.getUserDataPoints();
    //this.selectedCountry=this.countries[0];
    //this.onCountryChange(this.selectedCountry);
    //this.getUserGridData();
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
          //this.userCount=res.data.nUser;
          this.arrUserData.push({"key":"Guest User",y:res.data.nGuestPercent});
          this.arrUserData.push({"key":"Registered User",y:res.data.nRegisteredUserPercent});
        }
    });
    }
    getUserGridData(){
      this.dataSource.data=[];
      this.dashboardService.getUserGridData(this.selectedCity,this.selectedState,this.selectedCountry,this.pageNo,this.recordPageSize).subscribe((res:any)=>{
        if(res!=null && res.success && res.data!=null)
        {
          if(res.data.gridData.length>0)
        {
          this.recordLength=res.data.nTotalRecords;
          this.recordPageSize=res.data.nPageSize;
          this.pagesTotal=Math.ceil(this.recordLength/this.recordPageSize);
          this.pageNo=res.data.nPageNo;
          this.recordNumber=this.recordPageSize*this.pageNo;
          this.dataSource.data=res.data.gridData;
           this.userCount=res.data.nTotalRecords;
        }
        }
      });
    }

    onCountryChange(data){
      this.dashboardService.getStates(data).subscribe((res:any)=>{
        if(res!=null && res.success && res.data!=null &&  res.data.length>0)
        {
         this.states=res.data;
         this.selectedState="-";
        }
      });
    }
  
    onStateChange(data){
      this.dashboardService.getCities(data).subscribe((res:any)=>{
        if(res!=null && res.success && res.data!=null &&  res.data.length>0)
        {
         this.cities=res.data;
         this.selectedCity="-";
        }
      });
    }
  
    onCityChange(data){
  
    }
    previousClick(){
      if((this.pageNo-1)>=0){
        this.pageNo--;
        this.getUserGridData();
      }
      else
      {
        this.pageNo = this.pagesTotal-1;
        this.getUserGridData();
      }
    }
    nextClick(){
      if(this.pagesTotal>(this.pageNo+1))
      {
      this.pageNo++;
      this.getUserGridData();
      }
      else
      {
        this.pageNo = 0
        this.getUserGridData();
      }
    }
}
