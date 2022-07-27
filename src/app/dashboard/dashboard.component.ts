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
  liveChartOption: any;
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

  
  ngOnInit(): void {
    this.loginUser = localStorage.getItem('loginUser');
    let txt = 'State Fatalities';
    let data = [
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
      }];

    if(this.loginUser == 'iva' || this.loginUser == 'morth_manager') {
      txt = 'No. Of Fatalities';
      data = [
        {
          value: 127512,
        },
        {
          value: 112230,
          // itemStyle: { color: 'blue' },
        },
        {
          value: 100770,
          // itemStyle: { color: 'blue' },
        },
        {
          value: 93231,
          // itemStyle: { color: 'blue' },
        },
        {
          value: 34000,
          itemStyle: { color: 'green' }
        }]
    }
    this.liveChartOption = {
      // color: '#7596e1',
      title: {
        text:  txt,
        // subtext: `<div>hh<div>`,
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
      legend: {
        display: false,
        position: 'bottom'
      },
      legendCallback: (chart: any) =>{
        console.log("chart=",chart)
        var text = [];
        text.push('<ul class="' + chart.id + '-legend">');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          text.push('<li><div class="legendValue"><span style="background-color:' + chart.data.datasets[i].backgroundColor + '">&nbsp;&nbsp;&nbsp;&nbsp;</span>');
          if (chart.data.datasets[i].label) {
            text.push('<span class="label">' + chart.data.datasets[i].label + '</span>');
          }
          text.push('</div></li><div class="clear"></div>');
        }
        text.push('</ul>');
        return text.join('');
      },
      series: [{
        data: data,
        type: 'bar',
        label: this.labelOption2
      }]
    };
  
  }
  openList() {
    this.router.navigate(['proposal-list'])
  }

}
