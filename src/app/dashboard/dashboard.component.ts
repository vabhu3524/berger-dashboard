import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options;
  data1:any=[];
  data2:any=[];
  data3:any=[];
  data4:any=[];
  pieChart:any;
  pieChartData1:any=[];
  pieChartData2:any=[];
  pieChartData3:any=[];
  pieChartData4:any=[];
  constructor(private dashboardService:DashboardService) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

    //   const dataDailySalesChart: any = {
    //       labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    //       series: [
    //           [12, 17, 7, 17, 23, 18, 38]
    //       ]
    //   };

    //  const optionsDailySalesChart: any = {
    //       lineSmooth: Chartist.Interpolation.cardinal({
    //           tension: 0
    //       }),
    //       low: 0,
    //       high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    //       chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
    //   }

    //   var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    //   this.startAnimationForLineChart(dailySalesChart);


    //   /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    //   const dataCompletedTasksChart: any = {
    //       labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
    //       series: [
    //           [230, 750, 450, 300, 280, 240, 200, 190]
    //       ]
    //   };

    //  const optionsCompletedTasksChart: any = {
    //       lineSmooth: Chartist.Interpolation.cardinal({
    //           tension: 0
    //       }),
    //       low: 0,
    //       high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    //       chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
    //   }

    //   var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

    //   // start animation for the Completed Tasks Chart - Line Chart
    //   this.startAnimationForLineChart(completedTasksChart);



    //   /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    //   var datawebsiteViewsChart = {
    //     labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    //     series: [
    //       [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

    //     ]
    //   };
    //   var optionswebsiteViewsChart = {
    //       axisX: {
    //           showGrid: false
    //       },
    //       low: 0,
    //       high: 1000,
    //       chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
    //   };
    //   var responsiveOptions: any[] = [
    //     ['screen and (max-width: 640px)', {
    //       seriesBarDistance: 5,
    //       axisX: {
    //         labelInterpolationFnc: function (value) {
    //           return value[0];
    //         }
    //       }
    //     }]
    //   ];
    //   var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
     // this.startAnimationForBarChart(websiteViewsChart);








      this.options = {
        chart: {
          type: 'discreteBarChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 50,
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
            axisLabel: 'X Axis'
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: -10
          }
        }
      }
      // this.data = [
      //   {
      //     key: "Cumulative Return",
      //     values: [
      //       {
      //         "label" : "Red" ,
      //         "value" : 20
      //       } ,
      //       {
      //         "label" : "Blue" ,
      //         "value" : 40
      //       } ,
      //       {
      //         "label" : "Green" ,
      //         "value" : 28
      //       } ,
      //       {
      //         "label" : "Dark" ,
      //         "value" : 56
      //       } 
      //     ]
      //   }
      // ];
    


      this.pieChart= {
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

      // this.pieChartData= [
      //   {
      //     key: "One",
      //     y: 5
      //   },
      //   {
      //     key: "Two",
      //     y: 2
      //   },
      //   {
      //     key: "Three",
      //     y: 9
      //   },
      //   {
      //     key: "Four",
      //     y: 7
      //   },
      //   {
      //     key: "Five",
      //     y: 4
      //   },
      //   {
      //     key: "Six",
      //     y: 3
      //   },
      //   {
      //     key: "Seven",
      //     y: 8
      //   }
      // ]
  
  
//  this.getChartData();
  this.getCityStateCountry();
  this.getDropDownData();
  this.getUserDataPoints();
    }
    
    getChartData(number){

      this.dashboardService.getChartData(this["dynamicDD"+number].key,this["selectedDataPoint"+number],this["selectedDynamicType"+number]).subscribe((response:any)=>   {
        console.log(response);
        if(response.success && response.data!=null){
          this.processChartData(response.data,number);
        }
        
    });
    }
    processChartData(data,number){
      this["pieChartData"+number]=[];
      this["data"+number] = [
        {
          key: "Cumulative Return",
          values: []
        }
      ];
      data.forEach(element => {
        this["pieChartData"+number].push({"key": element.sDataPointValue  , "y":element.nCount });
        this["data"+number][0].values.push( {"label" : element.sDataPointValue ,
        "value" : element.nCount});
      });


      
      
    }
    citystatecountryList:any=[];
    dataPoints:any=[];
    citiesList:any=[];
    stateList:any=[];
    countryList:any=[];
    selectedDataPoint1:any="";
    selectedDataPoint2:any="";
    selectedDataPoint3:any="";
    selectedDataPoint4:any="";
    selectedType1:any="";
    selectedType2:any="";
    selectedType3:any="";
    selectedType4:any="";
    dynamicDD1:any={key:"",values:[]};
    dynamicDD2:any={key:"",values:[]};
    dynamicDD3:any={key:"",values:[]};
    dynamicDD4:any={key:"",values:[]};
    selectedDynamicType1:any="";
    selectedDynamicType2:any="";
    selectedDynamicType3:any="";
    selectedDynamicType4:any="";
    getCityStateCountry(){
      this.dashboardService.getCityStateCountry().subscribe((response:any)=>   {
          console.log(response);
          if(response.success && response.data!=null){
          this.dataPoints=response.data.sDataPointKey;
          this.citiesList=response.data.sCity;
          this.stateList=response.data.sState;
          this.countryList=response.data.sCountry;
          }
        });
    }
    
    onTypeChange(number,data){
      if(data=="country"){
        this["dynamicDD"+number].key="Country";
        this["dynamicDD"+number].values=this.countryList;
      }else if(data=="state"){
        this["dynamicDD"+number].key="State";
        this["dynamicDD"+number].values=this.stateList;
      }else if(data=="city"){
        this["dynamicDD"+number].key="City";
        this["dynamicDD"+number].values=this.citiesList;
      }
    }
    arrCountries:any=[];
    arrStates:any=[];
    arrCities:any=[];
    arrDataPoints:any=[];
    arrUserData:any=[];
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
          this.arrUserData.push({"key":"Guest User",y:res.data.nGuestPercent});
          this.arrUserData.push({"key":"Registered User",y:res.data.nRegisteredUserPercent});
        }
    });
    }
}
