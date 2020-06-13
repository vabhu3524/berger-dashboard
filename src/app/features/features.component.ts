import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  pieChart:any;
  arrFeatureSocial:any=[];
  arrFeatureCV:any=[];
  arrFeatureStore:any=[];
  arrFeatureContact:any=[];

  ngOnInit() {
    this.pieChart= {
      chart: {
        type: 'pieChart',
        height: 290,
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
    this.getFeatureSocial();
    this.getFeatureCV();
    this.getFeatureContact();
    this.getFeatureStore();
  }

  getFeatureSocial(){
    this.dashboardService.getFeatureData('socialShare').subscribe((res:any)=>{
      if(res!=null && res.success && res.data!=null)
      {
        this.arrFeatureSocial.push({"key":"Used",y:res.data.nUsedPercent});
        this.arrFeatureSocial.push({"key":"Not Used",y:res.data.nNotUsedPercent});
      }
  });
  }
  getFeatureCV(){
    this.dashboardService.getFeatureData('test').subscribe((res:any)=>{
      if(res!=null && res.success && res.data!=null)
      {
        this.arrFeatureCV.push({"key":"Used",y:res.data.nUsedPercent});
        this.arrFeatureCV.push({"key":"Not Used",y:res.data.nNotUsedPercent});
      }
  });
  }  

  getFeatureStore(){
    this.dashboardService.getFeatureData('storeLocator').subscribe((res:any)=>{
      if(res!=null && res.success && res.data!=null)
      {
        this.arrFeatureStore.push({"key":"Used",y:res.data.nUsedPercent});
        this.arrFeatureStore.push({"key":"Not Used",y:res.data.nNotUsedPercent});
      }
  });
  }


  getFeatureContact(){
    this.dashboardService.getFeatureData('contactUs').subscribe((res:any)=>{
      if(res!=null && res.success && res.data!=null)
      {
        this.arrFeatureContact.push({"key":"Used",y:res.data.nUsedPercent});
        this.arrFeatureContact.push({"key":"Not Used",y:res.data.nNotUsedPercent});
      }
  });
  }

}
