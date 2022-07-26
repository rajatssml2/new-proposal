import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginUser: any = '';

  labelOption2: any = {
    show: true,
    position: 'top' as BarLabelOption['position'],
    // distance: app.config.distance as BarLabelOption['distance'],
    // align: app.config.align as BarLabelOption['align'],
    // verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
    rotate: 0 as BarLabelOption['rotate'],
    // formatter: '{c}Cr',
    fontSize: 12,
    rich: {
      name: {}
    }
  }

  constructor(private router: Router) { }

  liveChartOption: any = {
    // color: '#7596e1',
    title: {
      text: 'State Fatalities',
      left: 'center'
    },
    responsive: true,
    color: '#b55419',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Fin Year',
      data: ['2018-19', '2019-20', '2020-21', '2021-22', '2022-23'],
    },
    yAxis: {
      show: false
      // type: 'value',
      // axisLabel : {
      //   formatter: '{value}Cr'
      // },
      // name: 'Value',
      // nameLocation: 'top',
      // nameGap: 50
    },

    series: [{
      data: [
        {
          value: 7205,
          // itemStyle: { color: 'blue' },
        },
        {
          value: 6500,
          // itemStyle: { color: 'blue' },
        },
        {
          value: 6200,
          // itemStyle: { color: 'blue' },
        },
        {
          value: 5800,
          // itemStyle: { color: 'blue' },
        },
        {
          value: 1200,
          itemStyle: { color: 'green' },
        }],
      type: 'bar',
      areaStyle: {},
      label: this.labelOption2
    }],
    legend: {
      display: true,
      // position: 'bottom',
      // y: 350
    },
    // {
    //   data: this.getChart1Data(),
    //   type: 'bar',
    // },
  };

  ngOnInit(): void {
    this.loginUser = localStorage.getItem('loginUser');
  }
  openList() {
    this.router.navigate(['proposal-list'])
  }

}
