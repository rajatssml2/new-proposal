import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard-analytic',
  templateUrl: './dashboard-analytic.component.html',
  styleUrls: ['./dashboard-analytic.component.css']
})
export class DashboardAnalyticComponent implements OnInit {
  title = 'ng2-charts-demo';
  isChartDrill = false;
  chartOption: any = {
    title: {
      text: ' Road Engineerning ',
      // subtext: 'eCharts for the win!',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      name: 'Year',
      data: ['2020', '2021', '2022'],
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        formatter: '{value}Cr'
      },
      name: 'Value',
      // nameLocation: 'top',
      // nameGap: 50
    },
    series: [
      {
        data: [20, 30, 40,50,60],
        type: 'bar',
      },
    ],
  };

  chartOption2:EChartsOption = {
    title: {
      text: 'Vehicle safety and road engineering',
      // subtext: 'eCharts for the win!',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      name: 'Year',
      data: ['2019','2020', '2021', '2022'],
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        formatter: '{value}Cr'
      },
      name: 'Value',
      // nameLocation: 'top',
      // nameGap: 50
    },
    series: [
      {
        data: [5, 10, 20,25,30],
        type: 'bar',
      },
    ],
  };
  chartOption3:EChartsOption = {
    title: {
      text: 'Enforcement of rules',
      // subtext: 'eCharts for the win!',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      name: 'Year',
      data: ['2019','2020', '2021', '2022'],
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        formatter: '{value}Cr'
      },
      name: 'Value',
      // nameLocation: 'top',
      // nameGap: 50
    },
    series: [
      {
        data: [10, 20,30,40],
        type: 'bar',
      },
    ],
  };
  chartOption4:EChartsOption = {
    title: {
      text: 'Post crash care',
      // subtext: 'eCharts for the win!',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      name: 'Year',
      data: ['2019','2020', '2021', '2022'],
      axisLine: { onZero: false }
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        formatter: '{value}Cr'
      },
      name: 'Value',
      axisLine: { onZero: false }
      // nameLocation: 'top',
      // nameGap: 50
    },
    series: [
      {
        data: [10, 20,30,40],
        type: 'bar',
      },
    ],
  };
  chartOption5:EChartsOption = {
    title: {
        text: 'KPIs wise expenditure',
        // subtext: 'eCharts for the win!',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['Enforcement of rules', 'Vehicle safety / driving training', 'Road engineering', 'Post crash care']
    },
    series: [
        {
          name: "Movies by category",  
          type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {value: 20, name: 'Enforcement of rules'},
                {value: 25, name: 'Vehicle safety / driving training'},
                {value: 40, name: 'Road engineering'},
                {value: 15, name: 'Post crash care'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                // normal: {
                //     formatter: '{b} : {c}',
                //     position: 'outside' //inside
                // }
            },
        }
    ]
  };
  chartOption11: any = {
    dataset: {
      source: [
        ['amount', 'product'],
        [10,  'Traning of officials'],
        [15, 'Black spot mitigation'],
        [5,'Corrective measure'],
        [25, 'Implement IRAD'],
        [40, 'IRR/RSA']
      ]
    },
    grid: { containLabel: true },
    xAxis: { name: 'amount',
    axisLabel : {
      formatter: '{value}Cr'
    }, 
    },
    yAxis: { type: 'category',
      name: 'Parameters'
    },
    // visualMap: {
    //   orient: 'horizontal',
    //   left: 'center',
    //   min: 10,
    //   max: 100,
    //   text: ['High Score', 'Low Score'],
    //   // Map the score column to color
    //   dimension: 0,
    //   inRange: {
    //     color: ['#65B581', '#FFCE34', '#FD665F']
    //   }
    // },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product'
        }
      }
    ]
  };

  constructor() {
   }
  ngOnInit(): void {
    
  }

  onChartEvent1(event: any, val: any) {
    this.isChartDrill = !this.isChartDrill;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const chartElement1 = document.getElementById('chart1');
      const chartElement2 = document.getElementById('chart2');
      // const chart1 = getInstanceByDom(chartElement1);
      // const chart2 = getInstanceByDom(chartElement2);
      // connect([chart1, chart2]);
    });
  }

}
