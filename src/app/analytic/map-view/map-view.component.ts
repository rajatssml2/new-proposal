import { Component, OnInit } from '@angular/core';
import { MapChart } from 'angular-highcharts';
import indiaMap from '../../../assets/indiaMap';
import config from '../../../assets/congif';

import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;


import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

HC_exporting(Highcharts);


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  public mapChart: any;
  stateOpeions:any = config.state;
  data1: (string | number)[][] =[
    ['andhra pradesh', 82],
    ['assam', 105],
    ['bihar', 92],
    ['gujarat', 70],
    ['haryana', 106], 
    ['karnataka', 100],
    ['madhya pradesh', 94],
    ['maharashtra', 102],
    ['odisha', 73],
    ['rajasthan', 68],
    ['tamil nadu', 29],
    ['telangana', 101], 
     ['uttar pradesh', 11], 
     ['west bengal', 29]
];

  constructor() { }
  
  ngOnInit(): void {


  let vvv: any = [{
    data: this.data1,
    name: 'State data',
    showInLegend: true,
    legend: {
      bottom: 10,
        left: 'center',
        
    },
    states: {
      hover: {
          color: '#BADA55'
      }       
    },
    dataLabels: {
        enabled: true,
        // format: '{point.name}'
    },
    
    
}]
      this.mapChart = new MapChart({
        chart: {
                  map: indiaMap,
                  
              },
      series: vvv,
      credits: {  
        enabled: false
      },
      
      exporting: {
        enabled: true
      },
      title: {
        text: 'State Wise Applications',
        // align: 'left',
        // y: 340 //  this to move y-coordinate of title to desired location
      },
    //   colorAxis: {
    //     min: 1,
    //     max: 1000,
    //     type: 'logarithmic',
    //     minColor: '#efecf3',
    //     maxColor: '#990041'
    // },
      // colorAxis: {
      //   min: 0
      // },
      });
  }

  getBarData() {
    let arr:any = [];
    this.data1.forEach((element:any) => {
      this.stateOpeions.forEach((state:any) => {
        console.log("state==",state)
        let stateLower = state.toLowerCase();
        if(stateLower == element[0]) {
          console.log("stateLower==",element)
          arr.push(element[1])
        }
      });
    });
    console.log("arr==",arr)
    return arr;
  }

  labelOption2: any = {
    show: true,
    position: 'right' as BarLabelOption['position'],
    // distance: 30 as BarLabelOption['distance'],
    // align: app.config.align as BarLabelOption['align'],
    // verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
    rotate: 0 as BarLabelOption['rotate'],
    // formatter: '{c}Cr',
    fontSize: 12,
    rich: {
      name: {}
    }
  }

  stateChartOption: any = {
    title:{
      text: 'All States',
      left: 'center'
    },
    // barCategoryGap: 13,
    grid: { containLabel: true },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: { name: 'Number Of Applications',
    axisLabel : {
      // formatter: '{value}Cr'
    }
    },
    yAxis: {
      type: 'category',
      data: this.stateOpeions,
      name: 'All States',
      
    },
    color: '#7cb5ec',
    series: [{
      type: 'bar',
      data: this.getBarData(),
      label: this.labelOption2,
    }],
    legend: {
      display: true,
      position: 'bottom',
      y: 350
    },
  
  };

}
