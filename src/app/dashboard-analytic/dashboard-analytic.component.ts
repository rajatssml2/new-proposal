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
  isChartDrill21 = false;
  isChartDrill31 = false;
  isChartDrill41 = false;
  loginUser: any = '';
  chartOption: any = {
    color: '#7596e1',
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
        data: this.getChart1Data(),
        type: 'bar',
      },
    ],
  };

  chartOption2:EChartsOption = {
    color: '#498c4e',
    title: {
      text: 'Vehicle safety and driver training',
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
        data: this.getChart2Data(),
        type: 'bar',
      },
    ],
  };

  chartOption3:EChartsOption = {
    color: '#d77c80',
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
        data: this.getChart3Data(),
        type: 'bar',
      },
    ],
  };
  chartOption4:EChartsOption = {
    color: '#d1cb86',
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
        data: this.getChart4Data(),
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
    color: '#6f42c1',
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

  chartOption21: any = {
    color: '#198754',
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
  chartOption31: any = {
    color: '#d63384',
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
  chartOption41: any = {
    color: '#ffc107',
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

  getChart1Data() {
    let lUser = localStorage.getItem('loginUser');
    if(lUser == 'state_officer' || lUser == 'state_manager') {
      return [5,7,10, 15, 20];
    }else {
      return [20, 30, 40, 50, 60];
    }
  }
  getChart2Data() {
    let lUser = localStorage.getItem('loginUser');
    if(lUser == 'state_officer' || lUser == 'state_manager') {
      return [5,10,15, 20];
    }else {
      return [10, 20, 40, 50, 60];
    }
  }
  getChart3Data() {
    let lUser = localStorage.getItem('loginUser');
    if(lUser == 'state_officer' || lUser == 'state_manager') {
      return [10, 15, 20, 30];
    }else {
      return [20, 25, 40, 50, 60];
    }
  }
  getChart4Data() {
    let lUser = localStorage.getItem('loginUser');
    if(lUser == 'state_officer' || lUser == 'state_manager') {
      return [15,20,30, 35, 40];
    }else {
      return [20, 30, 40, 50, 60];
    }
  }

  constructor() {
   }
  ngOnInit(): void {
    let lUser = localStorage.getItem('loginUser');
    this.loginUser = lUser;
  }

  onChartEvent1(event: any, val: any) {
    this.isChartDrill = !this.isChartDrill;
  }
  onChartEvent21(event: any, val: any) {
    this.isChartDrill21 = !this.isChartDrill21;
  }
  onChartEvent31(event: any, val: any) {
    this.isChartDrill31 = !this.isChartDrill31;
  }
  onChartEvent41(event: any, val: any) {
    this.isChartDrill41 = !this.isChartDrill41;
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
