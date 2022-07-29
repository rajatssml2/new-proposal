import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;
import config from '../../assets/congif';


@Component({
  selector: 'app-dashboard-analytic',
  templateUrl: './dashboard-analytic.component.html',
  styleUrls: ['./dashboard-analytic.component.css']
})
export class DashboardAnalyticComponent implements OnInit {
  stateOpeions:any = config.state;
  title = 'ng2-charts-demo';
  isChartDrill = false;
  isChartDrill21 = false;
  isChartDrill31 = false;
  isChartDrill41 = false;
  isChartDril2 = false;
  isChartDril21= false;
  isChartDril22 = false;
  isChartDril33 = false;
  isChartDril44 = false;
  isChartDrill112 = false;
  isChartDrill113 = false;
  isChartDrill114 = false;
  isChartDrill115 = false;

  loginUser: any = '';
  labelOption: any = {
    // show: true,
    // position: 'top' as BarLabelOption['position'],
    // distance: app.config.distance as BarLabelOption['distance'],
    // align: app.config.align as BarLabelOption['align'],
    // verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
    // rotate: 90 as BarLabelOption['rotate'],
    // formatter: '{c}Cr  {name|{a}}',
    // fontSize: 12,
    // rich: {
    //   name: {}
    // }
  };
  labelOption2:any = {
    show: true,
    position: 'right' as BarLabelOption['position'],
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

  chartOption: any = {
    // color: '#7596e1',
    title: {
      text: 'Road Engineering',
      left: 'center'
    },
    responsive: true,
    
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Year',
      data: ['2019-20', '2020-21', '2021-22'],
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
          name: 'Funds Allocated',
          type: 'bar',
          barGap: 0,
          label: this.labelOption,
          color: '#6610f2',
          emphasis: {
            focus: 'series'
          },
          data: [1, 2, 3]
        },
        {
          name: 'Funds Claimed',
          type: 'bar',
          label: this.labelOption,
          color: '#fd7e14',
          emphasis: {
            focus: 'series'
          },
          data: [.8, 1.8, 2.8]
        },
        {
          name: 'Funds Received',
          type: 'bar',
          color: '#adb5bd',
          label: this.labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [.6, 1.7, 2.4]
        }
      ],
      legend: {
        display: true,
        position: 'bottom',
        y: 350
      },
      // {
      //   data: this.getChart1Data(),
      //   type: 'bar',
      // },
  };

  chartOption2:any = {
    // color: '#498c4e',
    title: {
      text: 'Vehicle Safety & Driver Training',
      // subtext: 'eCharts for the win!',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Year',
      data: ['2019-20', '2020-21', '2021-22'],
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
        name: 'Funds Allocated',
        type: 'bar',
        color: '#6610f2',
        barGap: 0,
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [5, 7, 10],
        itemStyle: {
          fillColor: "rgba(220,220,220,0.5)", 
          strokeColor: "rgba(220,220,220,0.8)", 
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          borderType: 'dashed',
        }
      },
      {
        name: 'Funds Claimed',
        type: 'bar',
        label: this.labelOption,
        color: '#fd7e14',
        emphasis: {
          focus: 'series'
        },
        data: [4, 5, 8]
      },
      {
        name: 'Funds Received',
        type: 'bar',
        label: this.labelOption,
        color: '#adb5bd',
        emphasis: {
          focus: 'series'
        },
        data: [3, 5, 7]
      }
    ],
    legend: {
      display: true,
      position: 'bottom',
      y: 350
    },
  };

  chartOption3:any = {
    // color: '#498c4e',
    title: {
      text: 'Enforcement',
      // subtext: 'eCharts for the win!',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Year',
      data: ['2019-20', '2020-21', '2021-22'],
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
        name: 'Funds Allocated',
        type: 'bar',
        barGap: 0,
        label: this.labelOption,
        color: '#6610f2',
        emphasis: {
          focus: 'series'
        },
        data: [10, 20, 30],
        itemStyle: {
          fillColor: "rgba(220,220,220,0.5)", 
          strokeColor: "rgba(220,220,220,0.8)", 
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          borderType: 'dashed',
        }
      },
      {
        name: 'Funds Claimed',
        type: 'bar',
        label: this.labelOption,
        color: '#fd7e14',
        emphasis: {
          focus: 'series'
        },
        data: [8, 17, 28]
      },
      {
        name: 'Funds Received',
        type: 'bar',
        label: this.labelOption,
        color: '#adb5bd',
        emphasis: {
          focus: 'series'
        },
        data: [6, 16, 26]
      }
    ],
    legend: {
      display: true,
      position: 'bottom',
      y: 350
    },
  };
  chartOption4:any = {
    // color: '#498c4e',
    title: {
      text: 'Post-Crash Care',
      // subtext: 'eCharts for the win!',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Year',
      data: ['2019-20', '2020-21', '2021-22'],
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
        name: 'Funds Allocated',
        type: 'bar',
        barGap: 0,
        label: this.labelOption,
        color: '#6610f2',
        emphasis: {
          focus: 'series'
        },
        data: [7, 12, 23],
        itemStyle: {
          fillColor: "rgba(220,220,220,0.5)", 
          strokeColor: "rgba(220,220,220,0.8)", 
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          borderType: 'dashed',
        }
      },
      {
        name: 'Funds Claimed',
        type: 'bar',
        label: this.labelOption,
        color: '#fd7e14',
        emphasis: {
          focus: 'series'
        },
        data: [6, 10, 20]
      },
      {
        name: 'Funds Received',
        type: 'bar',
        label: this.labelOption,
        color: '#adb5bd',
        emphasis: {
          focus: 'series'
        },
        data: [5, 9, 19]
      }
    ],
    legend: {
      display: true,
      position: 'bottom',
      y: 350
    },
  };
  chartOption5:EChartsOption = {
    title: {
        text: 'KPIs Wise Expenditure',
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
        data: ['Enforcement', 'Vehicle Safety & Driving Training', 'Road Engineering', 'Post-Crash Care']
    },
    series: [
        {
          name: "KPIs Wise Expenditure",  
          type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {value: 20, name: 'Enforcement'},
                {value: 25, name: 'Vehicle Safety & Driving Training'},
                {value: 40, name: 'Road Engineering'},
                {value: 15, name: 'Post-Crash Care'}
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
    grid: { containLabel: true },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: { name: 'Amount',
    axisLabel : {
      formatter: '{value}Cr'
    }, 
    },
    yAxis: {
      type: 'category',
      data: ['Training of officials', 'Black spot mitigation', 'Corrective measure', 'Implement IRAD', 'IRR/RSA'],
      name: 'Parameters'
    },
    series: [
      {
        name: 'Funds Allocated',
        type: 'bar',
        barGap: 0,
        data: [1, 2, 1.3, 3.5, 3],
        label: this.labelOption2,
        color: '#6610f2'
      },
      {
        name: 'Funds Claimed',
        type: 'bar',
        data: [.8, 1.6, 1, 3.2, 2.7],
        label: this.labelOption2,
        color: '#fd7e14'
      },
      {
        name: 'Funds Received',
        type: 'bar',
        data: [.6, 1.5, .9, 3.1, 2.5],
        label: this.labelOption2,
        color: '#adb5bd'
      }
      // {
      //   type: 'bar',
      //   encode: {
      //     // Map the "Amount" column to X axis.
      //     x: 'Amount',
      //     // Map the "product" column to Y axis
      //     y: 'product'
      //   }
      // }
    ],
    legend: {
      display: true,
      position: 'bottom',
      y: 350
    },
  };

  chartOption21: any = {
    
    grid: { containLabel: true },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: { name: 'Amount',
    axisLabel : {
      formatter: '{value}Cr'
    }
    },
    yAxis: {
      type: 'category',
      data: ['Vehicle fitness centre', 'Driver training centre'],
      name: 'Parameters',
      
    },
    series: [
      {
        name: 'Funds Allocated',
        type: 'bar',
        barGap: 0,
        data: [1, 2],
        label: this.labelOption2,
        color: '#6610f2'
      },
      {
        name: 'Funds Claimed',
        type: 'bar',
        data: [.8, 1.6],
        label: this.labelOption2,
        color: '#fd7e14'
      },
      {
        name: 'Funds Received',
        type: 'bar',
        data: [.6, 1.5],
        label: this.labelOption2,
        color: '#adb5bd'
      }
      // {
      //   type: 'bar',
      //   encode: {
      //     // Map the "Amount" column to X axis.
      //     x: 'Amount',
      //     // Map the "product" column to Y axis
      //     y: 'product'
      //   }
      // }
    ],
    legend: {
      display: true,
      position: 'bottom',
      y: 350
    },
  
  };
  chartOption31: any = {
    
    grid: { containLabel: true },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: { name: 'Amount',
    axisLabel : {
      formatter: '{value}Cr'
    }
    },
    yAxis: {
      type: 'category',
      data: ['Rules enforcement', 'E-device/IPS component'],
      name: 'Parameters',
      
    },
    series: [
      {
        name: 'Funds Allocated',
        type: 'bar',
        barGap: 0,
        data: [15, 20],
        label: this.labelOption2,
        color: '#6610f2'
      },
      {
        name: 'Funds Claimed',
        type: 'bar',
        data: [14, 17],
        label: this.labelOption2,
        color: '#fd7e14'
      },
      {
        name: 'Funds Received',
        type: 'bar',
        data: [12, 16],
        label: this.labelOption2,
        color: '#adb5bd'
      }
    ],
    legend: {
      display: true,
      position: 'bottom',
      y: 350
    },
  
  };
  chartOption41: any = {
    
    grid: { containLabel: true },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: { name: 'Amount',
    axisLabel : {
      formatter: '{value}Cr'
    }
    },
    yAxis: {
      type: 'category',
      data: ['GPS Enablement', 'Ambulance Procurement'],
      name: 'Parameters',
      
    },
    series: [
      {
        name: 'Funds Allocated',
        type: 'bar',
        barGap: 0,
        data: [10, 12],
        label: this.labelOption2,
        color: '#6610f2'
      },
      {
        name: 'Funds Claimed',
        type: 'bar',
        data: [9, 10],
        label: this.labelOption2,
        color: '#fd7e14'
      },
      {
        name: 'Funds Received',
        type: 'bar',
        data: [8, 9],
        label: this.labelOption2,
        color: '#adb5bd'
      }
    ],
    legend: {
      display: true,
      position: 'bottom',
      y: 350
    },
  
  };

  chartOption111: any = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Training of officials', 'Black spot mitigation', 'Corrective measure', 'Implement IRAD', 'IRR/RSA']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        formatter: '{value}Cr'
      },
    },
    series: [
      {
        name: 'Training of officials',
        type: 'line',
        stack: 'Total',
        data: [.3, .2, .3, .1, .2, 0, .5, .1, .4, 0, .2, .6]
      },
      {
        name: 'Black spot mitigation',
        type: 'line',
        stack: 'Total',
        data: [.1, .2, .3, .1, .2, 0, .5, .1, .4, 0, .2, .6]
      },
      {
        name: 'Corrective measure',
        type: 'line',
        stack: 'Total',
        data: [.1, .2, 0, .1, .4, 0, .2, .1, .4, .5, .2, .8]
      },
      {
        name: 'Implement IRAD',
        type: 'line',
        stack: 'Total',
        data: [.2, .1, 0, .1, .2, 0, .5, .1, .4, 0, .2, .6]
      },
      {
        name: 'IRR/RSA',
        type: 'line',
        stack: 'Total',
        data: [1, .8, .3, .2, .6, .8, 0, .2, .7, 0, .1, .3]
      }
    ]
  };
  chartOption211: any = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Vehicle fitness centre', 'Driver training centre']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        formatter: '{value}Cr'
      }
    },
    series: [
      {
        name: 'Vehicle fitness centre',
        type: 'line',
        stack: 'Total',
        data: [.3, .2, .3, .1, .2, 0, .5, .1, .4, 0, .2, .6]
      },
      {
        name: 'Driver training centre',
        type: 'line',
        stack: 'Total',
        data: [.1, .2, .3, .1, .2, 0, .5, .1, .4, 0, .2, .6]
      }
    ]
  };

  chartOption311: any = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Rules enforcement', 'E-device/IPS component']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      // feature: {
      //   saveAsImage: {}
      // }
    },
    
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        formatter: '{value}Cr'
      }
    },
    series: [
      {
        name: 'Rules enforcement',
        type: 'line',
        stack: 'Total',
        data: [.3, .2, .3, .1, .2, 0, .5, .1, .4, 0, .2, .6]
      },
      {
        name: 'E-device/IPS component',
        type: 'line',
        stack: 'Total',
        data: [.1, .2, .3, .1, .2, 0, .5, .1, .4, 0, .2, .6]
      }
    ]
  };
  chartOption411: any = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      display: true,
      data: ['GPS Enablement', 'Ambulance Procurement']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      // feature: {
      //   saveAsImage: {}
      // }
    },
    
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        formatter: '{value}Cr'
      }
    },
    series: [
      {
        name: 'GPS Enablement',
        type: 'line',
        stack: 'Total',
        data: [4, 1, 3, 1, 2, 2, 5, 0, 4, 0, 2, 6]
      },
      {
        name: 'Ambulance Procurement',
        type: 'line',
        stack: 'Total',
        data: [1, 2, 3, 1, 2, 0, 5, 6, 4, 0, 2, 6]
      }
    ]
  };

  chartOption112: any = {
    // color: '#7596e1',
    title: {
      text: 'Road Engineerning',
      left: 'center'
    },
    responsive: true,
    
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Parameters',
      axisLabel: {
        interval: 0,
        rotate: 30 //If the label names are too long you can manage this by rotating the label.
      },
      data: ['Training of officials', 'Black spot mitigation', 'Corrective measure', 'Implement IRAD', 'IRR/RSA'],
    
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
          name: 'Target',
          type: 'bar',
          barGap: 0,
          label: this.labelOption,
          color: '#6610f2',
          emphasis: {
            focus: 'series'
          },
          data: [5, 2, 3, 1, 7]
        },
        {
          name: 'Achieved',
          type: 'bar',
          label: this.labelOption,
          color: '#fd7e14',
          emphasis: {
            focus: 'series'
          },
          data: [3, 1, 2.2, .6, 6]
        }
      ],
      legend: {
        orient: 'vertical',
        x: 'right',
        // display: true,
        // position: 'bottom',
        // y: 350
      },
      // {
      //   data: this.getChart1Data(),
      //   type: 'bar',
      // },
  };
  chartOption113: any = {
    // color: '#7596e1',
    // title: {
    //   text: 'Road Engineerning',
    //   left: 'center'
    // },
    responsive: true,
    
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Parameters',
      axisLabel: {
        interval: 0,
        rotate: 30 //If the label names are too long you can manage this by rotating the label.
      },
      data: ['Vehicle fitness centre', 'Driver training centre'],
    
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
          name: 'Target',
          type: 'bar',
          barGap: 0,
          label: this.labelOption,
          color: '#6610f2',
          emphasis: {
            focus: 'series'
          },
          data: [2, 3]
        },
        {
          name: 'Achieved',
          type: 'bar',
          label: this.labelOption,
          color: '#fd7e14',
          emphasis: {
            focus: 'series'
          },
          data: [1, 2.3]
        }
      ],
      legend: {
        orient: 'vertical',
        x: 'right',
        // display: true,
        // position: 'bottom',
        // y: 350
      },
      // {
      //   data: this.getChart1Data(),
      //   type: 'bar',
      // },
  };
  chartOption114: any = {
    // color: '#7596e1',
    // title: {
    //   text: 'Road Engineerning',
    //   left: 'center'
    // },
    responsive: true,
    
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Parameters',
      axisLabel: {
        interval: 0,
        rotate: 30 //If the label names are too long you can manage this by rotating the label.
      },
      data: ['Rules enforcement', 'E-device/IPS component'],
    
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
          name: 'Target',
          type: 'bar',
          barGap: 0,
          label: this.labelOption,
          color: '#6610f2',
          emphasis: {
            focus: 'series'
          },
          data: [2, 3]
        },
        {
          name: 'Achieved',
          type: 'bar',
          label: this.labelOption,
          color: '#fd7e14',
          emphasis: {
            focus: 'series'
          },
          data: [1.5, 2.6]
        }
      ],
      legend: {
        orient: 'vertical',
        x: 'right',
        // display: true,
        // position: 'bottom',
        // y: 350
      },
      // {
      //   data: this.getChart1Data(),
      //   type: 'bar',
      // },
  };
  chartOption115: any = {
    // color: '#7596e1',
    // title: {
    //   text: 'Road Engineerning',
    //   left: 'center'
    // },
    responsive: true,
    
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      name: 'Parameters',
      axisLabel: {
        interval: 0,
        rotate: 30 //If the label names are too long you can manage this by rotating the label.
      },
      data: ['GPS Enablement', 'Ambulance Procurement'],
    
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
          name: 'Target',
          type: 'bar',
          barGap: 0,
          label: this.labelOption,
          color: '#6610f2',
          emphasis: {
            focus: 'series'
          },
          data: [2.6, 4]
        },
        {
          name: 'Achieved',
          type: 'bar',
          label: this.labelOption,
          color: '#fd7e14',
          emphasis: {
            focus: 'series'
          },
          data: [2.5, 3.6]
        }
      ],
      legend: {
        orient: 'vertical',
        x: 'right',
        // display: true,
        // position: 'bottom',
        // y: 350
      },
      // {
      //   data: this.getChart1Data(),
      //   type: 'bar',
      // },
  };
  

  getChartOption11Source () {
    let lUser = localStorage.getItem('loginUser');
    if(lUser == 'state_officer' || lUser == 'state_manager') {
      return [
        ['Amount', 'product'],
        [5,10,14,  'Training of officials'],
        [10,12,14, 'Black spot mitigation'],
        [5,7,3, 'Corrective measure'],
        [12,10,23, 'Implement IRAD'],
        [17,12,10, 'IRR/RSA']
      ];
    }else {
      return [
        ['Amount', 'product'],
        [15,20,13,  'Training of officials'],
        [20,12,14, 'Black spot mitigation'],
        [25,10,13,'Corrective measure'],
        [30,23,14, 'Implement IRAD'],
        [35,10,23, 'IRR/RSA']
      ];
    }
    
  }

  getChartOption21Source () {
    let lUser = localStorage.getItem('loginUser');
    if(lUser == 'state_officer' || lUser == 'state_manager') {
      return [
        ['Amount', 'product'],
        [3,  'Training of officials'],
        [7, 'Black spot mitigation'],
        [5,'Corrective measure'],
        [10, 'Implement IRAD'],
        [15, 'IRR/RSA']
      ];
    }else {
      return [
        ['Amount', 'product'],
        [10,  'Training of officials'],
        [15, 'Black spot mitigation'],
        [18,'Corrective measure'],
        [16, 'Implement IRAD'],
        [20, 'IRR/RSA']
      ];
    }
  }

  getChartOption31Source () {
    let lUser = localStorage.getItem('loginUser');
    if(lUser == 'state_officer' || lUser == 'state_manager') {
      return [
        ['Amount', 'product'],
        [6,  'Training of officials'],
        [8, 'Black spot mitigation'],
        [10,'Corrective measure'],
        [5, 'Implement IRAD'],
        [15, 'IRR/RSA']
      ];
    }else {
      return [
        ['Amount', 'product'],
        [10,  'Training of officials'],
        [15, 'Black spot mitigation'],
        [18,'Corrective measure'],
        [16, 'Implement IRAD'],
        [20, 'IRR/RSA']
      ];
    }
  }

  getChartOption41Source () {
    let lUser = localStorage.getItem('loginUser');
    if(lUser == 'state_officer' || lUser == 'state_manager') {
      return [
        ['Amount', 'product'],
        [7,  'Training of officials'],
        [13, 'Black spot mitigation'],
        [10,'Corrective measure'],
        [5, 'Implement IRAD'],
        [15, 'IRR/RSA']
      ];
    }else {
      return [
        ['Amount', 'product'],
        [10,  'Training of officials'],
        [15, 'Black spot mitigation'],
        [18,'Corrective measure'],
        [16, 'Implement IRAD'],
        [20, 'IRR/RSA']
      ];
    }
  }

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
  onDrillChart11(event: any, val: any) {
    this.isChartDril2 = !this.isChartDril2;
  }
  onDrillChart21(event: any, val: any) {
    this.isChartDril22 = !this.isChartDril22;
  }
  onDrillChart31(event: any, val: any) {
    this.isChartDril33 = !this.isChartDril33;
  }
  onDrillChart41(event: any, val: any) {
    this.isChartDril44 = !this.isChartDril44;
  }
  onChartEvent112(event: any, val: any) {
    this.isChartDrill112 = !this.isChartDrill112;
  }
  onChartEvent113(event: any, val: any) {
    this.isChartDrill113 = !this.isChartDrill113;
  }

  onChartEvent114(event: any, val: any) {
    this.isChartDrill114 = !this.isChartDrill114;
  }
  onChartEvent115(event: any, val: any) {
    this.isChartDrill115 = !this.isChartDrill115;
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
