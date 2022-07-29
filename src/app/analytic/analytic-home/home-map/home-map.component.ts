import { Component, Input, OnInit } from '@angular/core';
import { MapChart } from 'angular-highcharts';
import config from '../../../../assets/congif';

import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;
@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.css']
})
export class HomeMapComponent implements OnInit {
  @Input() stateSelected: any;
  stateChartOption: any;
  yearByYearOption: any;
  disbursedAmtOption: any;

  stateOptions:any = config.state;
  data1: (string | number)[][] =[
    ['andhra pradesh', 2],
    ['bihar', 2],
    ['haryana', 3], 
    ['telangana', 4], 
    ['rajasthan', 5],
    ['assam', 5.7],
    ['karnataka', 6],
    ['madhya pradesh', 6.4],
    ['tamil nadu', 6.5],
    ['uttar pradesh', 7],
    ['gujarat', 7.5],
    ['odisha', 8],
    ['maharashtra', 8.5],
    ['west bengal', 9]
];
labelOption2: any = {
  show: false,
  position: 'right' as BarLabelOption['position'],
  // distance: 30 as BarLabelOption['distance'],
  // align: app.config.align as BarLabelOption['align'],
  // verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
  rotate: 0 as BarLabelOption['rotate'],
  formatter: '{c}M',
  fontSize: 12,
  rich: {
    name: {}
  }
}

  constructor() { }

  ngOnInit(): void { 
    console.log(this.stateSelected);
    if(this.stateSelected) {

    } else {
      this.stateChartOption = {
        title:{
          text: 'Disbursed Amount and First KPI by State',
          left: 'center'
        },
        barCategoryGap: 3,
        grid: { containLabel: true },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: { name: 'Disbursed Amount',
        axisLabel : {
          formatter: '{value}M'
        }
        },
        yAxis: {
          type: 'category',
          data: this.stateOptions,
          name: 'State',
          
        },
        color: '#0b35ea',
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
      
      }
      
    }
    this.loadYearByYearChart();
    this.loadDisbursedAmtChart();
   
  }
  getDataloadYearByYearChart() {
    if(this.stateSelected) {
      return [106,97,86,105,105];
    }else {
      return [106,97,86,105,105];
    }
  }
  getDataAmtChart() {
    if(this.stateSelected) {
      return ['105', '119', '134', '141'];
    }else {
      return ['8', '9', '10', '12'];
    }
  }

  loadYearByYearChart() {
    this.yearByYearOption = {
      title:{
        text:  this.stateSelected ? 'Count of Sr. No. by Year' : 'Applications by Year by Year',
        left: 'center'
      },
      barCategoryGap: 3,
      grid: { containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        //  name: 'Disbursed Amount',
      axisLabel : {
        // formatter: '{value}M'
      }
      },
      yAxis: {
        type: 'category',
        data: ['2021','2022','2023', '2024', '2025'],
        // name: 'State',
        
      },
      color: '#dc3545',
      series: [{
        type: 'bar',
        data: this.getDataloadYearByYearChart(),
        label: this.labelOption2,
      }],
      legend: {
        display: true,
        position: 'bottom',
        y: 350
      },
    
    }
  }
  loadDisbursedAmtChart() {
    this.disbursedAmtOption = {
      title:{
        text: this.stateSelected ? 'Count of Sr. No. by KPIs' : 'Disbursed Amount by KPIs',
        left: 'center'
      },
      barCategoryGap: 3,
      grid: { containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: { 
      name: 'Disbursed Amount',
      align: 'center',
      axisLabel : {
        formatter: '{value}M',
        align: 'center'
      }
      },
      yAxis: {
        type: 'category',
        data: ['Enforcement','Vehicle Safety & Driver Training','Post-Crash Care', 'Road Engineering'],
        // name: 'State',
        
      },
      color: '#dc3545',
      series: [{
        type: 'bar',
        data: this.getDataAmtChart(),
        label: this.labelOption2,
      }],
      legend: {
        display: true,
        position: 'bottom',
        y: 350
      },
    
    }
  }
  getBarData() {
    let arr:any = [];
    this.data1.forEach((element:any) => {
      this.stateOptions.forEach((state:any) => {
        let stateLower = state.toLowerCase();
        if(stateLower == element[0]) {
          arr.push(element[1])
        }
      });
    });
    return arr;
  }

}
