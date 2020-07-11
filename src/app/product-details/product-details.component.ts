import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'app/services/dashboard.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  sub:any;
  productId:any="";
  productData:any=[];
  displayedColumns:any;
  dataSource:any;
  countries:any=["India"];
  states:any=[];
  cities:any=[];
  selectedCountry:any="-";
  selectedState:any="-";
  selectedCity:any="-";
  productName:any="";
  options:any;
  chartType:any="BarChart";
  constructor(private actRoute:ActivatedRoute,private dashboardService:DashboardService) { }

  ngOnInit() {
  
    this.sub = this.actRoute.params.subscribe(params => {
      this.displayedColumns = ['position','sDataPointValue', 'nCount', 'sParam'];
      this.dataSource = [];
      this.productData = [];
       this.productId= params['id'];
       this.productName= params['name'];
       if(this.productId=="roomType" || this.productId=="surfaceArea"){
         this.chartType="PieChart";
        this.setPieChart();
       }else
       {
        this.chartType="BarChart";
        this.setOptions();
       }

       
       this.getProductChartData();
       this.selectedState="-";
       this.selectedCity="-";
       this.selectedCountry=this.countries[0];
       this.onCountryChange(this.selectedCountry);
       this.getProductGridData();
    });
  }
  setOptions(){
    this.options={
      chart: {
        type: 'discreteBarChart',
        height: 350,
        width:500,
        margin : {
          top: 20,
          right: 20,
          bottom: 55,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel:"",
          rotateLabels: 20,
          fontSize:15
        },
        yAxis: {
          axisLabel: '',
          axisLabelDistance: -5,
          rotateYLabel: false
        }
      }
    };
  }

  setPieChart(){
    this.options= {
      chart: {
        type: 'pieChart',
        height: 500,
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
  }

  getProductChartData(){
    this.dashboardService.getProductDeatils(this.productId).subscribe((res:any)=>{
      if(res!=null && res.success && res.data!=null &&  res.data.length>0)
      {

        if(this.chartType=="PieChart"){

        
        for(var index=0;index<res.data.length;index++)
        {
        this.productData.push({"key":res.data[index][0],y:res.data[index][1]});
        }
      }else
      {
        this.productData = [
          {
              key: "Product Details",
              values: []
          }];
        for(var index=0;index<res.data.length;index++)
        {
          this.productData[0].values.push({
            "label" : res.data[index][0] ,
            "value" : res.data[index][1]});
        }
      }

        
        
      }
    });
  }

  getProductGridData(){
    this.dataSource = [];
    this.dashboardService.getProductGridData(this.productId,this.selectedCity,this.selectedState,this.selectedCountry).subscribe((res:any)=>{
      if(res!=null && res.success && res.data!=null &&  res.data.length>0)
      {
        var arrData:any[]=res.data;
        arrData.sort((row1,row2)=>{return row2.nCount - row1.nCount})
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